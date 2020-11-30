import { combineReducers } from 'redux'

import weatherReducer from './weatherReducer'
import newsReducer from './newsReducer'
import userReducer from './userReducer'
import cryptoReducer from './cryptoReducer'

export default combineReducers({
    weather: weatherReducer,
    news: newsReducer,
    user: userReducer,
    crypto: cryptoReducer,
})
