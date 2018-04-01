import axios from 'axios';
const API_KEY = '9dbfdf9304bfd934de48809a28427e5a';
const ROOT_URL = process.env.WEATHER_API + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	console.log(url);
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request,
	};
}
