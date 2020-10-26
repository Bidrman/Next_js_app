import { useState } from 'react'

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)

    return [
        values,
        (e) => {
            console.log('event', e, e.target.name)
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            })
        },
    ]
}

export default useForm
