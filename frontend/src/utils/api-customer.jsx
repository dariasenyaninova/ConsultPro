import { fetchWithAuth } from "./fetchWithAuth.jsx";
import { API_BASE_URL } from "../config.jsx";

export async function updateCustomer(data) {
    try {
        const response = await fetchWithAuth(`${API_BASE_URL}/profile/customer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const text = await response.text();
        return text ? 200 : 400;
    } catch (error) {
        console.error('Error updating customer:', error);
        throw error;
    }
}

export async function fetchUserProfile() {
    const response = await fetchWithAuth(`${API_BASE_URL}/profile/me`);
    if (!response.ok) {
        throw new Error(`Profile loading error: ${response.status}`);
    }
    return await response.json();
}

