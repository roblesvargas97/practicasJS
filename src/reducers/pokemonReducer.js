
import { SET_POKEMON , SET_POKEMON_INFO } from '../actions/types';

const initialState = {
    list: [],
    infoPokemon: {},
}


const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON :
            return{...state,list:action.payload}

        case SET_POKEMON_INFO:
            return {...state, infoPokemon: action.payload }

        default:
            return{...state};
    }
}

export default pokemonReducer;