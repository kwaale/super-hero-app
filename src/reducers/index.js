import { LOGIN, ERROR_LOGIN } from '../actions/index'
const initialState = {
    token:"",
    errorLogin:false
};

//En este casso arrancamos con rootreducer

export default function rootReducerPrimero(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                token:action.payload,
                errorLogin:false
            }
        case ERROR_LOGIN:
            return{
                ...state,
                errorLogin:action.payload
            }
        default:
            return{
                ...state
            }
    }
}