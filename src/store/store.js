import { createStore, compose } from 'redux'

import createReducer from '../reducers/combineReducers'

const store = createStore(
    createReducer(),
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store
