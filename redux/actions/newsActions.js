import * as types from '../types'

export const addNews = (newsFetch) => ({
    type: types.ADD_NEWS,
    payload: newsFetch,
})

export const updateNews = (news) => ({
    type: types.UPDATE_NEWS,
    payload: news,
})

export const removeNews = () => ({
    type: types.REMOVE_NEWS,
})

export const fetchRequest = (url) => ({
    type: types.NEWS_FETCH_REQUEST,
    payload: url,
})

export const fetchSuccess = () => ({
    type: types.NEWS_FETCH_SUCCESS,
})

export const fetchFail = () => ({
    type: types.NEWS_FETCH_FAIL,
})
