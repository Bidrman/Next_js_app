import { HELLO } from '../types'

// export const runTest = () => ({
//     type: types.TEST,
// })

export const runHello = (value) => ({
    type: HELLO,
    payload: value,
})
