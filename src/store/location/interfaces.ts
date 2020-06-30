export interface ILocationState {
	coords: Coordinates | null;
	setCoords?: any;
	getCoords?: any;
}

export interface LocationProviderProps {
	children: React.ReactChild;
}
