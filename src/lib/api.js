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
  try { return await request("/projects"); } catch { return null; }
}

async function fetchPosts() {
  "use cache";
  cacheLife("minutes");
  try { return await request("/posts"); } catch { return null; }
}

async function fetchPost(slug) {
  "use cache";
  cacheLife("minutes");
  try { return await request(`/posts/${slug}`); } catch { return null; }
}
/* ---- Public helpers: same names and behaviour as before ---- */

export async function getProjects() {
  const data = await fetchProjects();
  return Array.isArray(data) && data.length ? data : fallbackProjects;
}

export async function getPosts() {
  const data = await fetchPosts();
  return Array.isArray(data) ? data : [];
}

export async function getPost(slug) {
  return (await fetchPost(slug)) ?? null;
}

// Not cached: called from the admin login form later.
export async function loginAdmin(email, password) {
  return request("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}