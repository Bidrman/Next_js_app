import { fork, takeLatest, takeEvery, call, put, select } from 'redux-saga/effects'

import * as types from '../../redux/types'
import { fetchJsonData } from '../sideEffects/fetch/fetchData'
import { fetchedData } from '../../redux/actions/cryptoActions'

function* watchCryptoSaga() {
    yield takeEvery(types.CRYPTO_FETCH_REQUEST, cryptoFetchData)
}

function* cryptoFetchData(action) {
    const IncomingData = yield call(fetchJsonData, action.payload)
    console.log('data', typeof fetchedData, fetchedData)

    yield put(fetchedData, IncomingData)
}

export default function* cryptoRootSaga() {
    yield fork(watchCryptoSaga)
}

// export default function* rootCryptoSaga() {}
