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
                    //musi se jeste presneji upresnit podle struktury
                    cityName: data.city,
                    forecast: data.weather,
                },
            ])
        },
    ]

    // return [
    //     values,
    //     (e) => {
    //         setValues({
    //             ...values,
    //             [e.target.name]: e.target.value,
    //         })
    //     },
    // ]
}

export default useManageCities
