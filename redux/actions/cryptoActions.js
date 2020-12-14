import { HELLO, INCREASE, DECREASE, SET_URL, FETCHED_DATA, CRYPTO_FETCH_REQUEST } from '../types'

// export const runTest = () => ({
//     type: types.TEST,
// })

export const setUrl = (url) => ({
    type: SET_URL,
    payload: url,
})

export const fetchedData = (data) => ({
    type: FETCHED_DATA,
    payload: data,
})

export const fetchRequest = (url) => ({
    type: CRYPTO_FETCH_REQUEST,
    payload: url,
})

export const runHello = (value) => ({
    type: HELLO,
    payload: value,
})

export const runIncrease = () => ({
    type: INCREASE,
})

export const runDecrease = () => ({
    type: DECREASE,
})
