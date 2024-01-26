import React, { Component } from "react";
import { ControlPanel } from "./ControlPanel";
import { Field } from "./Field";
import { connect } from "react-redux";

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			arr: ["первое поле", "второе поле"],
		};
	}

	handleSubmit = (newValue) => {
		this.setState({ arr: newValue });
		console.log("запускаем handleSubmit");
	};

	render() {
		return (
			<div className="app">
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
