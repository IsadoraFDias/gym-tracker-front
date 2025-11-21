import {create} from 'zustand';

interface AuthState {
    token: string | null;
    userId: string | null;
    isLoggedIn: boolean;
    login: (token: string, userId: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: localStorage.getItem('jwtToken') || null,
    userId: localStorage.getItem('userId') || null,
    isLoggedIn: !!localStorage.getItem('jwtToken'),
    login: (token: string, userId: string) => {
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('userId', userId);
        set({ token, userId, isLoggedIn: true });
    },
    logout: () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userId');
        set({ token: null, userId: null, isLoggedIn: false });
    }
}))