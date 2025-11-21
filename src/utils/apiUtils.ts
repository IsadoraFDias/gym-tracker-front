import { useAuthStore } from "../store/authStore";

export const getAuthHeaders = () => {
    const token = useAuthStore.getState().token;

    if (!token) {
        throw new Error("User is not authenticated");
    }
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}