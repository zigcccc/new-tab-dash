import React from 'react';
import ReactDOM from 'react-dom';

import { LocationProvider } from './store';

import { ThemeSetup } from './styles';

import { App } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<LocationProvider>
			<ThemeSetup>
				<App />
			</ThemeSetup>
		</LocationProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
