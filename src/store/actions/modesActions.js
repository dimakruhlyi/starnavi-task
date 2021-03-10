import {GET_MODES, MODES_ERROR} from '../types'
import axios from 'axios'

export const getModes = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://demo1030918.mockable.io/`)
        dispatch( {
            type: GET_MODES,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: MODES_ERROR,
            payload: error,
        })
    }

}