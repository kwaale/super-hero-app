import axios from "axios";

export const PRIMERA_ACTION = "PRIMERA_ACTION";
export const LOGIN = "LOGIN";

export function primeraAccion(){
    return{
        type:PRIMERA_ACTION,
        payload:console.log('Imprime payload')
    }
}
export function login(payload){
    return async (dispatch)=>{
        try {
            const {data} = await axios.post('http://challenge-react.alkemy.org/');
            data
        } catch (error) {
            
        }
        
    }
}