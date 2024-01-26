import React, { Component } from "react";
import { ControlPanel } from "./ControlPanel";
import { Field } from "./Field";

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			arr: ["новое поле", "еще"],
			name: "Max",
		};
	}
	// componentDidUpdate() {
	// 	window.addEventListener("submit", this.handleSubmit);
	// 	console.log("upd App");
	// }
	handleSubmit = (newValue) => {
		this.setState({ arr: newValue });
		console.log("запускаем handleSubmit");
	};

	render() {
		return (
			<div className="app">
				<div>{this.state.name}</div>
				<div className="container">
					{this.state.arr.map((item, index) => (
						<Field key={index} item={item} />
					))}
				</div>
				<ControlPanel
					arr={this.state.arr}
					name={this.state.name}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}
