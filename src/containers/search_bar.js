import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
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
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	};

	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input
					type="text"
					placeholder="Enter the city name for weather details!"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button className="btn btn-success" type="submit">
						Submit
					</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
