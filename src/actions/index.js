import axios from "axios";

export const PRIMERA_ACTION = "PRIMERA_ACTION";
export const LOGIN = "LOGIN";

export function primeraAccion(){
    return{
        type:PRIMERA_ACTION,
        payload:console.log('Imprime payload')
    }
}
//Revisar, no tiene que ser una action
export function login(body){
    console.log('body',body)
    return async (dispatch)=>{
        try {
            const {data } = await axios.post('http://challenge-react.alkemy.org/', body);
            localStorage.setItem('token', data.token);
        } catch (error) {
            console.error('EERROORR', error)
        }
        
    }
}