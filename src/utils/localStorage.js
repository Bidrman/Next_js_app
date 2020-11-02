export const saveLocalStorage = (key, value) => {
    const serializedData = JSON.stringify(value)

    try {
        localStorage.setItem(key, serializedData)
        if (serializedState === null) {
            return undefined
        }
    } catch (error) {
        console.warn('nastala chyba při ukládání dat do localStorage: ', error)
        return undefined
    }
}

export const loadLocalStorage = (key) => {
    const loadedStorage = localStorage.getItem(key)

    return JSON.parse(loadLocalStorage)
}
