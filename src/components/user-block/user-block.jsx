import { UserPersonalInfo, UserContacts } from "./components-user-block";

export const UserBlock = () => {
	return (
		<div>
			<h2>Пользователь</h2>
			<UserPersonalInfo />
			<UserContacts />
		</div>
	);
};
