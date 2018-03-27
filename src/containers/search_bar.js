import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	onInputChange = event => {
		this.setState({
			term: event.target.value,
		});
	};

	onFormSubmit = event => {
		event.preventDefault();

		//Fetch weather data
	};

	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input
					type="text"
					placeholder="Get a five day forecast in your city!"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button className="btn btn-success" type="submit">
						{' '}
						Submit
					</button>
				</span>
			</form>
		);
	}
}
