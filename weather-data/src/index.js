import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {reducer as weatherReducer } from "./reducers/weather"
import './index.css';
import App from './App';

const rootReducer = combineReducers({
 weather: weatherReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
 <App />
 </Provider>
 , document.getElementById('root'));
