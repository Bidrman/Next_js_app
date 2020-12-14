import { put, takeLatest, takeEvery } from 'redux-saga/effects'

import { fetchJsonData } from '../sideEffects/fetch/fetchData'
import * as types from '../../redux/types'
import { addCity, fetchFail } from '../../redux/actions/weatherActions'

function* watchAddCity(url) {
    console.log('URL', url)
    yield takeEvery(types.WEATHER_FETCH_REQUEST, fetchCity, action.payload)
}

function* fetchCity(url) {
    try {
        const cityData = fetchJsonData(url)

        yield put(addCity(cityData))
    } catch (error) {
        console.log('chyba behem fetche ' + error)

        yield put(fetchFail())
    }
}

export default {
    watchAddCity,
}
