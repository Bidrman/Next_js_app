// import { createStore, compose, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'

// import { watchSaga } from '../sagas/rootSaga'
// import createReducer from '../reducers/combineReducers'

// // Kvuli nextu se (SSR) se pou69v8 store v _app.js   !!!!!

// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(
//     createReducer(),
//     compose(
//         applyMiddleware(sagaMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// )

// sagaMiddleware.run(watchSaga)

// const action = (type) => store.dispatch({ type })

// export default store
