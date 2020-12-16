import { put, fork, takeLatest, takeEvery, call } from 'redux-saga/effects'

import { fetchJsonData } from '../sideEffects/fetch/fetchData'
import * as types from '../../redux/types'
import { addCity } from '../../redux/actions/weatherActions'

function* watchWeatherSaga() {
    yield takeLatest(types.WEATHER_FETCH_REQUEST, weatherFetchData)
}

function* weatherFetchData(action) {
    try {
        const weatherData = yield call(fetchJsonData, action.payload)

        const storeCityData = addCity(weatherData)
        yield put(storeCityData)
    } catch (error) {
        console.log(`weatherFetchData nemohly dokoncit proces kvuli chybe: ${error}`)
    }
}

export default function* weatherRootSaga() {
    yield fork(watchWeatherSaga)
}
