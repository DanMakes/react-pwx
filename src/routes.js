import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/home';

export default (
	<main>
		<Switch>
			<Route exact path='/' component={HomePage} ></Route>
		</Switch>
	</main>
);