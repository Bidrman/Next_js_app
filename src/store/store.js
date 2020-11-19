import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from '../saga/rootSaga'
import createReducer from '../reducers/combineReducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    createReducer(),
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleware.run(rootSaga)

export default store
