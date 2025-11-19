import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from "@/hooks.ts";

const PublicRoutes = () => {
    const token = localStorage.getItem('token');
    const timesTried = useAppSelector((state) => state.auth).timesTried;
    if (token && timesTried === 0) {
        return <Navigate to="/main"/>
    }
    return <Outlet />;
}
export default PublicRoutes;