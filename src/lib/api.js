import { cacheLife } from "next/cache";
import { fallbackProjects } from "./data";

const API = process.env.NEXT_PUBLIC_API_URL;

async function request(path, options = {}) {
  const res = await fetch(`${API}${path}`, options);
  if (!res.ok) {
    const err = new Error("Request failed");
    err.status = res.status;
    throw err;
  }
  return res.json();
}

/* ---- Cached fetchers: throw on failure so errors are never cached ---- */

async function fetchProjects() {
  "use cache";
  cacheLife("minutes");
  return request("/projects");
}

async function fetchPosts() {
  "use cache";
  cacheLife("minutes");
  return request("/posts");
}

async function fetchPost(slug) {
  "use cache";
  cacheLife("minutes");
  return request(`/posts/${slug}`);
}

/* ---- Public helpers: same names and behaviour as before ---- */

export async function getProjects() {
  try {
    const data = await fetchProjects();
    return data.length ? data : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export async function getPosts() {
  try {
    return await fetchPosts();
  } catch {
    return [];
  }
}

export async function getPost(slug) {
  try {
    return await fetchPost(slug);
  } catch {
    return null;
  }
}

// Not cached: called from the admin login form later.
export async function loginAdmin(email, password) {
  return request("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}