import { Component } from "react";
import { connect } from "react-redux";

export class ControlPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputText: "",
			arr: props.arr,
			name: props.name,
		};
		this.onChangeInputText = this.onChangeInputText.bind(this);
		this.onSubmitText = this.onSubmitText.bind(this);
		console.log(this.state.arr);
	}
	onChangeInputText(event) {
		this.setState({ inputText: event.target.value });
	}
	onSubmitText(event) {
		event.preventDefault();
		console.log("отправлено: " + this.state.inputText);
		let newArr = this.props.arr;
		newArr.push(this.state.inputText);
		console.log(newArr);
		this.props.handleSubmit(newArr);
	}
	// componentDidUpdate() {
	// 	console.log("upd ContrPanel");
	// 	window.addEventListener("submit", this.onSubmitText);
	// }
	render() {
		return (
			<div className="controlPanel">
				<form onSubmit={this.onSubmitText}>
					<input
						type="text"
						value={this.state.inputText}
						onChange={this.onChangeInputText}
					/>
					<button type="submit">Добавить поле</button>
				</form>
			</div>
		);
	}
}
