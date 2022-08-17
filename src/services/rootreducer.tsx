import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { notesReducer } from './reducer';

const reducer = combineReducers({ notesReducer });

const store = configureStore({ reducer });

export default store;
