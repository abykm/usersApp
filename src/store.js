import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './reducers/users';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const reducer = combineReducers({ usersReducer });

const intialState = {};
const middleware = [thunk];

const store = configureStore({ reducer });

export default store;
