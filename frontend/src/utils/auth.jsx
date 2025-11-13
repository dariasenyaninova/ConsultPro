import { API_BASE_URL } from "../config.jsx";

const AUTH_KEY = "auth";

export function saveAuthCredentials(username, password) {
    const encoded = btoa(`${username}:${password}`);
    localStorage.setItem(AUTH_KEY, encoded);
}

export function getAuthHeader() {
    const token = localStorage.getItem(AUTH_KEY);
    return token ? { Authorization: `Basic ${token}` } : {};
}

export async function login(username, password) {
    saveAuthCredentials(username, password);
    const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: getAuthHeader(),
    });
    return res;
}

export async function register(username, password) {
    const res = await fetch(`${API_BASE_URL}/registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role: "ROLE_USER" }),
    });
    return res.text();
}

export function logout() {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem("specialistEdit");
}
