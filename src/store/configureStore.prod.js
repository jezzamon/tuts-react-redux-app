import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';  //looks for index.js if no file given
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}  //goodway to initialize store with some state (ie serverside rendering), taking one parameter
