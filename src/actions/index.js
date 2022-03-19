import { SET_POKEMON , OPEN_INFO, SET_POKEMON_INFO , SET_POKEMON_FAV, OPEN_POKEMON_FAV } from "./types";

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload,   
})

export const toggleOpenInfo = (payload)=> ({
    type: OPEN_INFO,
    payload,
})

export const setPokemonInfo = (payload) => ({
    type: SET_POKEMON_INFO,
    payload,
})

export const setPokemonFav = (payload) => ({
    type: SET_POKEMON_FAV,
    payload,
})

export const openPokemonFav = (payload) => ({
    type: OPEN_POKEMON_FAV,
    payload,
})
