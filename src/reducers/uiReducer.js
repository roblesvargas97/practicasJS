import { OPEN_INFO, OPEN_POKEMON_FAV , OPEN_SEARCHER, SET_ERROR_SEARCHER, SET_LOADER  } from "../actions/types";

const initialState = {
    stateInfo: false,
    stateFav: false,
    stateSearcher: false,
    stateErrorSearcher: false,
    stateLoader: true,
}

const uiReducer = (state = initialState , action) => {
    switch (action.type) {
        case OPEN_INFO:
            return {...state , stateInfo: action.payload};

        case OPEN_POKEMON_FAV:
            return {...state , stateFav: action.payload };
        
        case OPEN_SEARCHER:
            return {...state , stateSearcher: action.payload};

        case SET_ERROR_SEARCHER:
            return{...state , stateErrorSearcher: action.payload};

        case SET_LOADER: 
            return{...state , stateLoader: action.payload };
    
        default:
            return {...state};    ;
    }
}

export default uiReducer;