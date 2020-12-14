import { HELLO, INCREASE, DECREASE, SET_URL, FETCHED_DATA, CRYPTO_FETCH_REQUEST } from '../types'

// export const runTest = () => ({
//     type: types.TEST,
// })

export const setUrl = (url) => ({
    type: SET_URL,
    payload: url,
})

export const fetchedData = (url) => ({
    type: FETCHED_DATA,
    payload: url,
})

export const fetchRequest = () => ({
    type: CRYPTO_FETCH_REQUEST,
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
