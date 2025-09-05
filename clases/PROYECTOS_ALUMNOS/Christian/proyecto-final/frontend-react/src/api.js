// src/api.js
const API_BASE = "http://127.0.0.1:3001";


const fixImageUrl = (p) => {
  if (p && typeof p.imagenUrl === "string" && p.imagenUrl.startsWith("/")) {
    p.imagenUrl = API_BASE + p.imagenUrl; // convierte /uploads/... en absoluta
  }
  return p;
};

export async function apiGet(path){
  const r = await fetch(API_BASE + path);
  if(!r.ok) throw new Error(`HTTP ${r.status}`);
  const data = await r.json();
  if (Array.isArray(data)) return data.map(fixImageUrl);
  if (data && typeof data === "object") return fixImageUrl(data);
  return data;
}

export async function apiJson(path, method="GET", body){
  const r = await fetch(API_BASE + path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined
  });
  if(!r.ok) throw new Error(`HTTP ${r.status}`);
  const data = await r.json();
  return data;
}

export async function apiForm(path, method="POST", formData){
  const r = await fetch(API_BASE + path, { method, body: formData });
  if(!r.ok) throw new Error(`HTTP ${r.status}`);
  const data = await r.json();
  if (Array.isArray(data)) return data.map(fixImageUrl);
  if (data && typeof data === "object") return fixImageUrl(data);
  return data;
}
