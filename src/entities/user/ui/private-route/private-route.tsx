import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/shared/lib";

export function PrivateRoute() {
	const { isAuthenticated } = useAppSelector((state) => state.user);

	return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
}
