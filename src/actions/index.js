import { SET_POKEMON , OPEN_INFO } from "./types";

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload,   
})

export const toggleOpenInfo = ()=> ({
    type: OPEN_INFO,
})