import { useEffect, useState } from 'react'

// function getValue(key, initialValue) {
//     try {
//         const storedValue = JSON.parse(localStorage.getItem(key))

//         if (storedValue) return storedValue

//         if (initialValue instanceof Function) return initialValue()
//         return initialValue
//     } catch (error) {
//         console.log(`security token is not in local storage: ${error}`)
//     }
// }

// export default function useLoginToken(key, initialValue) {
//     const [value, setValue] = useState(() => {
//         return getValue(key, initialValue)
//     })

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value))
//     }, [value])

//     return [value, setValue]
// }

export default function useLoginToken(key) {
    const [token, setToken] = useState(null)

    const setValue = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    const getValue = () => {
        try {
            const item = window.localStorage.getItem(key)

            return JSON.parse(item)
        } catch (error) {
            console.log('cant get security token: ', error)
        }
    }

    useEffect(() => {
        getValue()
    }, [])

    return [token, setValue]
}
