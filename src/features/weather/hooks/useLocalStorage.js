import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const storedItem = window.localStorage.getItem(key)
            const loadedItem = item ? JSON.parse(storedItem) : initialValue

            return loadedItem
        } catch (error) {
            console.warn('Error pri nacitani localStorage dat: ', error)
            return initialValue
        }
    })

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, value)
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue]
}

export default useLocalStorage
