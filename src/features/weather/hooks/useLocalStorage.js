import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const storedItem = window.localStorage.getItem(key)
            const loadedItem = storedItem ? JSON.parse(storedItem) : initialValue

            return loadedItem
        } catch (error) {
            console.warn('Error pri nacitani localStorage dat: ', error)
            return initialValue
        }
    })

    const setValue = (value) => {
        try {
            console.log('useLocalHook', value instanceof Function)
            const valueToStore = value instanceof Function ? value(storedValue) : value
            console.log('valueStore!!', valueToStore)
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue]
}

export default useLocalStorage
