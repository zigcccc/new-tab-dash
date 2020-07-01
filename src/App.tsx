import React from 'react';
import { LocationContext, WeatherContext } from './store';

import { AppWrapper, Container, Header, Main } from './components/Layout';
import {
	ToggleHandle,
	Clock,
	Calendar,
	LocationTag,
	PhotoAuthorTag,
	SearchInput,
} from './components/Elements';

export const App = () => {
	const [open, setOpen] = React.useState(false);
	const { getCoords, coords } = React.useContext(LocationContext);
	const { data: weatherData, weatherImage, getWeather } = React.useContext(
		WeatherContext
	);

	const toggleWidget = () => {
		setOpen(!open);
	};

	React.useEffect(() => {
		if (!coords) {
			getCoords();
		} else {
			getWeather(coords);
		}
	}, [coords, getCoords, getWeather]);

	return (
		<AppWrapper image={weatherImage?.src.large2x}>
			<PhotoAuthorTag
				authorName={weatherImage?.photographer}
				authorUrl={weatherImage?.photographer_url}
			/>
			<Container open={open}>
				<ToggleHandle open={open} onClick={toggleWidget} />
				<SearchInput />
				<Header>
					<Calendar />
					<LocationTag />
				</Header>
				<Main>
					<Clock />
					<strong>
						{weatherData?.weather[0].main}, {weatherData?.main.feels_like}
						<sup>&deg;</sup>C
					</strong>
				</Main>
			</Container>
		</AppWrapper>
	);
};
