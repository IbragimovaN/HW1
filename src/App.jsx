import styles from "./App.module.css";

export const WithLoggining = (Component) => {
	const NewComponent = (props) => {
		console.log(props.user);

		return <Component {...props} />;
	};

	return NewComponent;
};

export const WithLogginingAndColor = (Component, color) => {
	const NewComponent = (props) => {
		console.log(props.user);

		return (
			<span style={{ color }}>
				<Component {...props} />
			</span>
		);
	};

	return NewComponent;
};

export const HelloMessage = ({ user }) => {
	return <span>Привет {user}</span>;
};

// export const GoodbyeMessage = ({ user }) => {
// 	return <span>До свидания {user}</span>;
// };

const HelloMessageWithLoggin = WithLoggining(HelloMessage);
const HelloMessageWithLogginAndColorRed = WithLogginingAndColor(
	HelloMessage,
	"red",
);

export const UserWidget = ({ Message }) => {
	const user = "Maxim";

	return (
		<div>
			<div>Текущий пользователь: {user}</div>
			<div>Сообщение:</div>
			<HelloMessageWithLoggin user={user} />
			<HelloMessageWithLogginAndColorRed user={user} />
			{/* <Message user={user} /> */}
		</div>
	);
};

export const App = () => {
	return (
		<div className={styles.app}>
			<UserWidget />
			{/* <UserWidget Message={HelloMessage} />
			<UserWidget Message={GoodbyeMessage} /> */}
		</div>
	);
};
