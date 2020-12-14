export const fetchJsonData = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log('DATA', data)

        return data
    } catch (error) {
        console.log(`Nastala chyba pri fetchi dat: ${error}`)
    }
}
