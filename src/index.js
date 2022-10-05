import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {createStore} from "redux";
import {Provider} from "react-redux";
import { legacy_createStore as createStore} from 'redux'
// configureStore method of the @reduxjs/toolkit
import {configureStore} from "@reduxjs/toolkit"
import {store} from "./store";

// const action




// const store = configureStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
