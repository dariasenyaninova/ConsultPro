import {fetchWithAuth} from "./fetchWithAuth.jsx";
import { API_BASE_URL } from "../config.jsx";

export async function createSpecialist(data) {
    try {
        const response = await fetchWithAuth(`${API_BASE_URL}/profile/register-specialist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const text = await response.text();
        return text ? 200 : 400;
    } catch (error) {
        console.error('Error creating specialist:', error);
        throw error;
    }
}

export async function updateSpecialist(data) {
    try {
        const response = await fetchWithAuth(`${API_BASE_URL}/profile/specialist`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const text = await response.text();
        return text ? 200 : 400;
    } catch (error) {
        console.error('Error updating specialist:', error);
        throw error;

    }
}
