import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/configStore';
import { load } from './actions/userActions';


const store = configStore();

store.dispatch(load());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter >
			< App />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();