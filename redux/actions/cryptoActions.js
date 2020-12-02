import { HELLO, INCREASE, DECREASE } from '../types'

// export const runTest = () => ({
//     type: types.TEST,
// })

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
