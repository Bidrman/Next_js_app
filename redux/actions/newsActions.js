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

export const fetchStart = () => ({
    type: types.FETCH_START,
})

export const fetchSuccess = () => ({
    type: types.FETCH_SUCCESS,
})

export const fetchFail = () => ({
    type: types.FETCH_FAIL,
})
