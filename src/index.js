import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/configStore';
require('./index.css');
const store = configStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter >
			< App />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();