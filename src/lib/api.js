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

// Portfolio: falls back to static data so the site never looks empty or broken.
export async function getProjects() {
  try {
    const data = await request("/projects", { next: { revalidate: 60 } });
    return data.length ? data : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

// Blog list: empty array if the API is down.
export async function getPosts() {
  try {
    return await request("/posts", { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}

// Single post: null if missing or the API is down.
export async function getPost(slug) {
  try {
    return await request(`/posts/${slug}`, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

// For the admin dashboard later.
export async function loginAdmin(email, password) {
  return request("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}