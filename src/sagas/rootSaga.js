import { delay } from 'redux-saga'
import { takeEvery, put, fork, takeLatest } from 'redux-saga/effects'

import { HELLO } from '../../redux/types'

export function* watchSaga() {
    console.log('fuck it, im not runing')
    yield takeEvery(HELLO, doSaga)
}

export function* doSaga() {
    console.log('radsi at to bezi')
}
