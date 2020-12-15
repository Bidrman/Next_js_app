import { takeEvery, put, fork, takeLatest, delay, all, call } from 'redux-saga/effects'

import cryptoRootSaga from './cryptoSaga'
import weatherRootSaga from './weatherSaga'
import newsRootSaga from './newsSaga'

// root Saga gathering all other Sagas

export default function* rootSaga() {
    yield fork(cryptoRootSaga)
    yield fork(weatherRootSaga)
    yield fork(newsRootSaga)
}
