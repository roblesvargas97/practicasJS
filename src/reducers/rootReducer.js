import { combineReducers } from "redux";
import pokemonReducer from './pokemonReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    ui: uiReducer,
})

export default rootReducer;