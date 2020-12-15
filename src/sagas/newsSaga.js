import { fork, takeLatest, takeEvery, call, put, select } from 'redux-saga/effects'

import * as types from '../../redux/types'
import { fetchJsonData } from '../sideEffects/fetch/fetchData'

function* watchNewsSaga() {
    yield takeEvery(types.NEWS_FETCH_REQUEST, fetchNewsData)
}

function* fetchNewsData(action) {
    console.log(action)
}

export default function* newsRootSaga() {
    yield fork(watchNewsSaga)
}
