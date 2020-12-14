import { fork, takeLatest, takeEvery, call, put, select } from 'redux-saga/effects'

import * as types from '../../redux/types'

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

function* watchCryptoSaga() {
    yield takeLatest(types.CRYPTO_FETCH_REQUEST, cryptoFetchData)
}

function* cryptoFetchData() {
    console.log(
        'volam se',
        select((state) => state.crypto.fetchUrl)
    )
    yield select((state) => state.crypto.fetchUrl)
}

export default function* cryptoRootSaga() {
    yield fork(watchCryptoSaga)
}

// export default function* rootCryptoSaga() {}
