import { combineReducers } from 'redux'

import weatherReducer from './weatherReducer'

export default function createReducer() {
    return combineReducers({
        weather: weatherReducer,
    })
}
