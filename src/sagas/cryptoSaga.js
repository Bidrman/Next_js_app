import { fork, takeLatest, takeEvery, call, put, select } from 'redux-saga/effects'

import * as types from '../../redux/types'
import { fetchJsonData } from '../sideEffects/fetch/fetchData'
import { fetchedData } from '../../redux/actions/cryptoActions'

function* watchCryptoSaga() {
    yield takeEvery(types.CRYPTO_FETCH_REQUEST, cryptoFetchData)
}

function* cryptoFetchData(action) {
    const IncomingData = yield call(fetchJsonData, action.payload)

    const storeFetchedData = fetchedData(IncomingData)
    yield put(storeFetchedData)
}

export default function* cryptoRootSaga() {
    yield fork(watchCryptoSaga)
}

// export default function* rootCryptoSaga() {}
