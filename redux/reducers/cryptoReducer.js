import * as types from '../types'

const initialState = {
    isFetching: false,
    coins: null,
    message: '',
    fetchUrl: null,
    fetchedData: null,
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_URL:
            return {
                ...state,
                fetchUrl: action.payload,
            }
        case types.FETCHED_DATA:
            return {
                ...state,
                fetchedData: action.payload,
            }
        default:
            return state
    }
}

export default weatherReducer
