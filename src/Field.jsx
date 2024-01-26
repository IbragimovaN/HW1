import { Component } from "react";

export class Field extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		// console.log(this.props.item);
		return <div className="field">{this.props.item}</div>;
	}
	componentDidUpdate() {
		console.log("upd field");
	}
}
