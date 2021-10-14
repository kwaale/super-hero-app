import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducerPrimero from '../reducers';
import {heroesReduccer} from '../reducers/heroesReduccer';

//Hacer el combineReducer
const rootReducer = combineReducers({
    // introducir un objeto de reduccers
    heroesReduccer,
    rootReducerPrimero
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;