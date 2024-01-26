import { Component } from "react";

export class Field extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="field">{this.props.item}</div>;
	}
}
