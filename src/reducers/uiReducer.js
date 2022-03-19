import { OPEN_INFO, OPEN_POKEMON_FAV ,  } from "../actions/types";

const initialState = {
    stateInfo: false,
    stateFav: false,
}

const uiReducer = (state = initialState , action) => {
    switch (action.type) {
        case OPEN_INFO:
            return {...state , stateInfo: action.payload};

        case OPEN_POKEMON_FAV:
            return {...state , stateFav: action.payload };
    
        default:
            return {...state};    ;
    }
}

export default uiReducer;