import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';


const store = createStore(reducer);
//here provider is the one which passes all states from store to components in all over the application.
ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>, document.getElementById('root')
	);