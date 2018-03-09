import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import {reducer} from './todoListRedux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
