import { SET_POKEMON , OPEN_INFO, SET_POKEMON_INFO } from "./types";

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload,   
})

export const toggleOpenInfo = ()=> ({
    type: OPEN_INFO,
})

export const setPokemonInfo = (payload) => ({
    type: SET_POKEMON_INFO,
    payload,
})