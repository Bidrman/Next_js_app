import { useState } from 'react'

const useManageCities = (initialValues) => {
    const [cities, setCities] = useState(initialValues)

    return [
        cities,
        (data) => {
            console.log('data'.data)
            setCities([
                ...cities,
                {
                    name: data.city.name,
                    date: new Date(),
                    forecast: data.list.filter((litItem, index) => index <= 3),
                },
            ])
        },
    ]
}

export default useManageCities
