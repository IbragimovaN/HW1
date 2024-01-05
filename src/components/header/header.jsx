import { CurrentUser } from "./components-header";

export const Header = () => {
	return (
		<div>
			<div>Информация в шапке приложения</div>
			<CurrentUser />
		</div>
	);
};
