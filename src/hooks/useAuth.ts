import {useNavigate} from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import {loginUser} from "../api/auth";
import {useMutation} from "@tanstack/react-query";

export function useAuth() {
    const navigate = useNavigate();
    const authLogin = useAuthStore((state) => state.login);

    const {mutate: login, isPending, error } = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            authLogin(data.token, data.userId);
            navigate("/workout-groups", {replace: true});
        },
        onError: (error: Error) => {
            console.error("Erro ao fazer login:", error.message);
        }
    })
    return {
        login,
        isPending,
        error
    }
}