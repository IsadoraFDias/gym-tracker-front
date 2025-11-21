const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export type AuthResponse = {
    token: string;
    userId: string;
}

export const registerUser = async (data: unknown): Promise<AuthResponse> => {

    const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao registrar usuário");
    }
    const result = await response.json();
    return result;
}

export const loginUser = async (data: unknown): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/sessions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao fazer login");
    }
    const result = await response.json();
    return result;
}