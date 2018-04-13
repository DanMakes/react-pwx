import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';
import HomePage from './components/home/home';
import UserPage from './components/user/user';

export default (
	<main>
		<Switch>
			<Route exact path='/' component={HomePage} ></Route>
			<Route path='/users' component={UserPage}></Route>
		</Switch>
	</main>
);