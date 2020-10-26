import * as types from '../types'

const initialState = {
    userId: null,
    isLogged: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                isLogged: true,
                userId: action.payload,
            }
        case types.LOGOUT:
            return {
                ...state,
                isLogged: false,
                userId: null,
            }
        default:
            return state
    }
}

export default userReducer
