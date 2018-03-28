import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temp = cityData.list.map(weather => kelvinToFahrenheit(weather.main.temp));
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={name}>
				<td className="city">
					<GoogleMap lon={lon} lat={lat} />
				</td>

				<td>
					<Chart data={temp} color="green" unit="F" />
				</td>
				<td>
					<Chart data={pressure} color="blue" unit="hPa" />
				</td>
				<td>
					<Chart data={humidity} color="red" unit="%" />
				</td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>

				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather }; // {weather}=== {weather:weather}
}
export default connect(mapStateToProps)(WeatherList);
