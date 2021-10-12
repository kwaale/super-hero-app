import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducerPrimero from '../reducers';

//Hacer el combineReducer
const rootReducer = combineReducers({
    // introducir un objeto de reduccers
    // reducers:
    rootReducer:rootReducerPrimero
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

