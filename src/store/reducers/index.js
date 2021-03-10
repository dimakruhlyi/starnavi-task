import { combineReducers } from 'redux'
import {modesReducer} from './modesReducer'

export default combineReducers({
  modesList: modesReducer
})