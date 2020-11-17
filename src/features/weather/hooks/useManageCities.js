import { useState } from 'react'

const useManageCities = (initialValues) => {
    const [cities, setCities] = useState(initialValues)

    return [
        cities,
        (data) => {
            setCities([
                ...cities,
                {
                    id: data.city.id,
                    name: data.city.name,
                    date: new Date(),
                    forecast: data.list.filter((litItem, index) => index <= 3),
                },
            ])
        },
    ]
}

export default useManageCities
