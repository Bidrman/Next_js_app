const fetchJsonData = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()

        return data
    } catch (error) {
        console.log(`Nastala chyba pri fetchi dat: ${error}`)
    }
}

export default {
    fetchJsonData,
}
