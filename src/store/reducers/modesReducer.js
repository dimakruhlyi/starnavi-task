import {GET_MODES, MODES_ERROR} from '../types'

const initialState = {
    modes:{},
    loading: true
}

export const modesReducer = (state = initialState, action) =>{

    switch(action.type){
        case GET_MODES:
        return {
            ...state,
            modes: action.payload,
            loading: false
        }
        case MODES_ERROR:
            return {
                loading: false,
                error: action.payload 
            }
        default: return state
    }

}