import {Navigate, Outlet} from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';


export const ProtectedRoute = () => {
    const {isLoggedIn} = useAuthStore();

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
}