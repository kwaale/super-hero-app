import axios from "axios";

export const PRIMERA_ACTION = "PRIMERA_ACTION";
export const LOGIN = "LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";
// export const LOGIN = "LOGIN";

//Revisar, creo que no tiene que ser una action
export function login(body) {
    console.log('body', body)
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://challenge-react.alkemy.org/', body);
            console.log('DATA', data)
            localStorage.setItem('token', data.token);
            return dispatch({
                type: LOGIN,
                payload: data.token
            });
        } catch (error) {
            console.error(error)
            return dispatch({ type: ERROR_LOGIN, payload: true });
        }
    }
}