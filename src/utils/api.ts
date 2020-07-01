import axios, { AxiosRequestConfig } from 'axios';

type TTokenType = 'Bearer' | 'QueryParam';

interface APIProps {
	baseUrl: string | undefined;
	apiToken: string | undefined;
	tokenType: TTokenType;
}

class API {
	private baseUrl: string | undefined;
	private token: string | undefined;
	private tokenType: TTokenType;

	constructor({ baseUrl, apiToken, tokenType }: APIProps) {
		this.baseUrl = baseUrl;
		this.token = apiToken;
		this.tokenType = tokenType;

		axios.defaults.baseURL = this.baseUrl;
		axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

		if (this.tokenType === 'Bearer') {
			axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
		}
	}

	setTokenType(tokenType: TTokenType) {
		this.tokenType = tokenType;
		return this;
	}

	get(path: string, params: any) {
		const options: AxiosRequestConfig = {
			method: 'GET',
			params:
				this.tokenType === 'QueryParam' ? { ...params, appid: this.token } : params,
			url: `${this.baseUrl}${path}`,
		};
		return axios.request(options);
	}
}

export const api = new API({
	baseUrl: process.env.REACT_APP_WEATHER_API_BASE_URL,
	apiToken: process.env.REACT_APP_WEATHER_API_TOKEN,
	tokenType: 'QueryParam',
});

export const imageApi = new API({
	baseUrl: process.env.REACT_APP_PEXELS_API_BASE_URL,
	apiToken: process.env.REACT_APP_PEXELS_TOKEN,
	tokenType: 'Bearer',
});
