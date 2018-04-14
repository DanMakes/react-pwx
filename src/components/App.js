import React from 'react';
import { Header, NavbarComponent } from './common/';

import Routes from '../routes';

class App extends React.Component {
	render() {
		return (
			<main>
				<Header />
				<NavbarComponent />
				<div className="container">
					{Routes}
				</div>
			</main>
		);
	}
}

export default App;