import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

export const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<div className="home">HOME</div>} />
				<Route
					path="/catalog"
					element={<div className="catalog">CATALOG</div>}
				/>
				<Route path="/login" element={<div className="login">LOGIN</div>} />
				<Route
					path="/privatPage"
					element={<ProtectedRoute>PRIVATE-PAGE</ProtectedRoute>}
				/>
			</Routes>
		</div>
	);
};
