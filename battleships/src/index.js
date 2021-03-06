import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from "redux";

import {Provider} from 'react-redux';
import rootReducer from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

import thunk from "redux-thunk";
import logger from 'redux-logger';

import Firebase, {FirebaseContext} from './firebase';
import {BrowserRouter} from "react-router-dom";

import {createBrowserHistory} from 'history';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={new Firebase()}>
            <BrowserRouter history={createBrowserHistory()}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
