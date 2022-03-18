import { OPEN_INFO } from "../actions/types";

const initialState = {
    stateInfo: false,
}

const uiReducer = (state = initialState , action) => {
    switch (action.type) {
        case OPEN_INFO:
            return {...state , stateInfo: action.payload};
    
        default:
            return {...state};    ;
    }
}

export default uiReducer;