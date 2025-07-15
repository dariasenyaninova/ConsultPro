import {API_BASE_URL} from "../config.jsx";
import {fetchWithAuth} from "./fetchWithAuth.jsx";

export async function sendSpecialistRequest(specialistId, message) {
    try {
        const response = await fetchWithAuth(`${API_BASE_URL}/client/new-request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                specialistId,
                message
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        console.error('Error while sending:', error);
        throw error;
    }
}

export async function fetchClientRequests() {
    const response = await fetchWithAuth(`${API_BASE_URL}/client/requests`);

    if (!response.ok) {
        throw new Error(`Error while sending: ${response.status}`);
    }

    return await response.json();
}

export async function fetchSpecialistRequests() {
    const response = await fetchWithAuth(`${API_BASE_URL}/specialist/requests`);

    if (!response.ok) {
        throw new Error(`Error while sending: ${response.status}`);
    }

    return await response.json();
}

export async function updateRequestStatus(id, newStatus) {
    const response = await fetchWithAuth(`${API_BASE_URL}/specialist/request/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newStatus })
    });

    if (!response.ok) {
        throw new Error(`Error while update status: ${response.status}`);
    }

    return await response.json();
}