import { Component, useEffect, useState } from "react";
import styles from "./App.module.css";

export const App = ({ message }) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		console.log(message);
		const updateScreenWidth = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", updateScreenWidth);
		return () => window.removeEventListener("resize", updateScreenWidth);
	}, [screenWidth, message]);

	return (
		<div className={styles.app}>
			{message}: {screenWidth}
		</div>
	);
};

export class OldApp extends Component {
	//state = window.innerWidth как вариант можно объвить здесь
	constructor(props) {
		super(props);
		//this.state = window.innerWidth; но обычно объявляют здесь
		/*тут нет такой свободы выбора названия состояний как в useState поэтому для того чтобы было понятнее запишем как объект*/
		this.state = {
			screenWidth: window.innerWidth,
		};
		/* 1 способ привязки контекста к функции: */
		// this.updateScreenWidth = this.updateScreenWidth.bind(this)
	}
	// updateScreenWidth() {
	// 	this.setState({ screenWidth: window.innerWidth });
	// }

	/* 2 способ: пишем как поле класса чтобы привязать контекст(чтобы innerWidth взялась из конструктора)*/
	updateScreenWidth = () => {
		this.setState({ screenWidth: window.innerWidth });
	};

	componentDidMount() {
		console.log(this.props.message);
		window.addEventListener("resize", this.updateScreenWidth);
	}

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.updateScreenWidth);
	};
	render() {
		return (
			<div className={styles.app}>
				{this.props.message}:{this.state.screenWidth}
			</div>
		);
	}
}
