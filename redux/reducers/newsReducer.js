import * as types from '../types'

// SSR to zabiji, musi se pres hooky
// const preloadedCities = loadLocalStorage('cities')

const initialState = {
    isFetching: false,
    news: [],
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NEWS:
            return {
                ...state,
                news: action.payload,
            }
        case types.REMOVE_NEWS:
            return {
                ...state,
                news: [],
            }
        case types.UPDATE_NEWS:
            return {
                ...state,
                cities: action.payload,
            }
        case types.FETCH_START:
            return {
                ...state,
                isFetching: true,
            }
        case types.FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case types.FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                error_msg: action.payload,
            }
        default:
            return state
    }
}

export default newsReducer
