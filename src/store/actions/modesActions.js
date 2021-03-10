import * as TYPES from '../types'
import axios from 'axios'

export const getModes = () => async dispatch => {
    dispatch({ type: TYPES.FETCH_MODES_REQUEST });
    try{
        const res = await axios.get(`http://demo1030918.mockable.io/`);
        const {data} = res;
        dispatch( {
            type: TYPES.FETCH_MODES_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch( {
            type: TYPES.FETCH_MODES_ERROR,
            payload: error,
        })
    }
}