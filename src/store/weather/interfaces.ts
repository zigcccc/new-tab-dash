export interface IWeather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface IWeatherData {
	coord: {
		lon: number;
		lat: number;
	};
	weather: IWeather[];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: { speed: number; deg: number };
	clouds: { all: number };
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export interface IImageSizes {
	original: string;
	large2x: string;
	large: string;
	medium: string;
	small: string;
	portrait: string;
	landscape: string;
	tiny: string;
}

export interface IWeatherImage {
	id: number;
	width: number;
	height: number;
	url: string;
	photographer: string;
	photographer_url: string;
	photographer_id: number;
	src: IImageSizes;
}

export interface IWeatherState {
	data: IWeatherData | null;
	weatherImage: IWeatherImage | null;
	getWeather?: any;
	setWeather?: any;
}

export interface WeatherProviderProps {
	children: React.ReactChild;
}
