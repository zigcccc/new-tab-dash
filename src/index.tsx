import React from 'react';
import ReactDOM from 'react-dom';

import { LocationProvider, TimeProvider, WeatherProvider } from './store';

import { ThemeSetup } from './styles';

import { App } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<TimeProvider>
			<LocationProvider>
				<WeatherProvider>
					<ThemeSetup>
						<App />
					</ThemeSetup>
				</WeatherProvider>
			</LocationProvider>
		</TimeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
