import { API_ENDPOINTS } from "../config/apiConfig";

export async function fetchUsers() {
    const response = await fetch(API_ENDPOINTS.USERS);
    return await response.json();
}