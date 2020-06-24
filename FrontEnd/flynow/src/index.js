import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
//import TableShow from './components/TableShow';

//Store
import { createStore } from 'redux'
import MyReducers from './reducers/index';
import { Provider } from 'react-redux'; // cung cap cac Store cho cai view
const Store = createStore(MyReducers)

ReactDOM.render(
    <Provider store = { Store }>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
