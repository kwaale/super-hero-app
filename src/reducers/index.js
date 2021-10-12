import {PRIMERA_ACTION } from '../actions/index'
const initialState = {
    prueba:""
};

//En este casso arrancamos con rootreducer

export default function rootReducerPrimero(state = initialState, action){
    switch(action.type){
        case PRIMERA_ACTION:
            return{
                ...state,
                //Cambiar accion
            }
        default:
            return{
                ...state
            }
    }
}