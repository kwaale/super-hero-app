import axios from "axios";

export const GET_HEROES = 'GET_HEROES';

export function getHeroesSearch(name) {
    console.log('getHeroesSearch NAME', name)
    return async dispatch => {
        try {
            const { data } = await axios.get(`https://www.superheroapi.com/api.php/10157543912541816/search/${name}`);
            return dispatch({
                type: GET_HEROES,
                payload: data
            });
        } catch (error) {
            console.error(error)
        }
    }
}