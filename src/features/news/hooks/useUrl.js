import { useState, useEffect } from 'react'

export const useUrl = (initialCountry) => {
    const [url, setUrl] = useState(initialCountry)

    const fetchUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=84a36c3765424acdb09e74a81ae2ccec`

    return []
}
