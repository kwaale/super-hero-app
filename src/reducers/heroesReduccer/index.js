import { GET_HEROES } from "../../actions/heroesActions";

const initialState = {
    heroesLoaded:[]
}

export const heroesReduccer = (state = initialState, action)=>{
    switch(action.type){
        case GET_HEROES:
            return{
                ...state,
                heroesLoaded:action.payload
            }
        default:
            return{...state}
    }
}