import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(< App children='Olá' />, document.getElementById('root'));
registerServiceWorker();