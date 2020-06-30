import axios, { AxiosRequestConfig } from 'axios';

interface APIProps {
	baseUrl: string | undefined;
	api_token: string | undefined;
}

class API {
	private baseUrl: string | undefined;
	private token: string | undefined;

	constructor({ baseUrl, api_token }: APIProps) {
		this.baseUrl = baseUrl;
		this.token = api_token;

		axios.defaults.baseURL = this.baseUrl;
	}

	get(path: string, params: any) {
		const options: AxiosRequestConfig = {
			method: 'GET',
			params: { ...params, appid: this.token },
			url: `${this.baseUrl}${path}`,
		};
		return axios.request(options);
	}
}

export const api = new API({
	baseUrl: process.env.REACT_APP_WEATHER_API_BASE_URL,
	api_token: process.env.REACT_APP_WEATHER_API_TOKEN,
});
