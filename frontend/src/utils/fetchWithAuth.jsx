import { getAuthHeader } from "./auth";

export async function fetchWithAuth(url, options = {}) {
    const headers = {
        ...options.headers,
        ...getAuthHeader(),
    };

    return fetch(url, { ...options, headers });
}
