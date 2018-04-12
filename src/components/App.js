import React from 'react';
import Header from './common/header';

import Routes from '../routes';

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header />
				{Routes}
				{this.props.children}
			</div>
		);
	}
}

export default App;