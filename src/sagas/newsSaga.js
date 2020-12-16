import { fork, takeLatest, takeEvery, call, put, select } from 'redux-saga/effects'

import * as types from '../../redux/types'
import { fetchJsonData } from '../sideEffects/fetch/fetchData'
import { fetchFail, fetchSuccess, addNews } from '../../redux/actions/newsActions'

function* watchNewsSaga() {
    yield takeEvery(types.NEWS_FETCH_REQUEST, fetchNewsData)
}

function* fetchNewsData(action) {
    console.log(action)
    try {
        const newsData = yield call(fetchJsonData, action.payload)

        console.log('DATA', newsData)
        const storeNews = addNews(newsData.articles)

        yield put(storeNews)
        yield put(fetchSuccess)
    } catch (error) {
        yield put(fetchFail)
        console.log(`nesFetch nebyl dokoncen kvuli chybe: ${error}`)
    }
}

export default function* newsRootSaga() {
    yield fork(watchNewsSaga)
}
