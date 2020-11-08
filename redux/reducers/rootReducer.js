import { combineReducers } from 'redux'

import weatherReducer from './weatherReducer'
import newsReducer from './newsReducer'
import userReducer from './userReducer'

export default combineReducers({
    weather: weatherReducer,
    news: newsReducer,
    user: userReducer,
})
