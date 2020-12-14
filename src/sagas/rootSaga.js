import { takeEvery, put, fork, takeLatest, delay, all, call } from 'redux-saga/effects'

import { HELLO, INCREASE, DECREASE } from '../../redux/types'

import watchAddCity from './weatherSaga'
import cryptoRootSaga from './cryptoSaga'

// function* watchSaga() {
//     console.log('fuck it, im not runing')
//     yield takeLatest(HELLO, doSaga)
// }

// function* doSaga() {
//     yield delay(2000)
//     console.log('radsi at to bezi')
// }

// export function* watchDecrease() {
//     yield takeEvery(DECREASE, doDecrease)
//     console.log('zmercen DESC')
// }

// export function* watchIncrease() {
//     yield takeEvery(INCREASE, doIncrease)
//     console.log('zmercen INC')
// }

// export function* doDecrease() {
//     yield delay(1000)
//     console.log('odecteno')
// }

// export function* doIncrease() {
//     yield delay(1000)
//     console.log('pricteno')
// }

//

export default function* rootSaga() {
    yield fork(cryptoRootSaga)
    // yield fork(watchWeatherSaga)
}
