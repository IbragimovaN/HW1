import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
	const isAuth = true; //useSelector

	if (!isAuth) {
		return <Navigate to="/login" />;
	}
	return <div className="private">{children}</div>;
};
