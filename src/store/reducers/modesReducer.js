import * as TYPES from '../types'

const initialState = {
    modes: null,
    loading: false,
    error: null
}

export const modesReducer = (state = initialState, action) =>{

    switch(action.type){
        case TYPES.FETCH_MODES_REQUEST:
        return {
            ...state,
            loading: true
        }
        case TYPES.FETCH_MODES_SUCCESS:
            return {
                ...state,
                modes: action.payload,
                loading: false
            }
        case TYPES.FETCH_MODES_ERROR:
            return {
                loading: false,
                error: action.payload,
                modes: null 
            }
        default: return state
    }
}