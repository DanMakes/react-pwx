import { createStore, applyMiddleware } from 'redux';
import root from '../reducers';
import thunk from 'redux-thunk';

export default function configStore() {
	return createStore(
		root,
		applyMiddleware(thunk)
	);
}