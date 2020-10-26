import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import 'bootstrap/dist/css/bootstrap.css'
import '../src/styles/modules.scss' // Global styles
import rootReducer from '../redux/reducers/rootReducer'

const SagaMiddleware = createSagaMiddleware()
// must have jinak háže next internal server error 502
const composeEnhancer =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(SagaMiddleware)))

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
