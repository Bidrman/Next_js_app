import * as types from '../types'

const initialState = {
    isFetching: false,
    coins: null,
    message: '',
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HELLO:
            return {
                ...state,
                message: action.payload,
            }
        default:
            return state
    }
}

export default weatherReducer
