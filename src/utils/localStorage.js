export const saveLocalStorage = (key, value) => {
    const serializedData = JSON.stringify(value)

    try {
        window.localStorage.setItem(key, serializedData)
    } catch (error) {
        console.warn('nastala chyba při ukládání dat do localStorage: ', error)
    }
}

export const loadLocalStorage = (key) => {
    const loadedStorage = window.localStorage.getItem(key)

    return JSON.parse(loadLocalStorage)
}
