import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {};

const middleware = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware))


const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;
