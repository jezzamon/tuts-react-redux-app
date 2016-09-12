import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';  //looks for index.js if no file given
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //from applyMiddleware
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware( thunk, reduxImmutableStateInvariant() ) 
    );
}  //goodway to initialize store with some state (ie serverside rendering), taking one parameter