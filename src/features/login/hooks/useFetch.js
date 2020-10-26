//FETCH HOOK !!!
import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true })

    useEffect(
        () => {
            setState((state) => ({ data: state.data, loading: true }))
            fetch(url)
                .then((resp) => resp.text())
                .then((data) => {
                    setState({
                        data: data,
                        loading: false,
                    })
                })
        },
        [url],
        setState
    )

    return state
}

// basic verze, ktera bz se mohla hodit pro muj login

// export const useFetch = (url) => {
//     const [state, setState] = useState({ data: null, loading: true })

//     useEffect(() => {
//         setState({ data: null, loading: true })
//         fetch(url)
//             .then((resp) => resp.text())
//             .then((data) => {
//                 setState({
//                     data: data,
//                     loading: false,
//                 })
//             })
//     }, [url])

//     return state
// }
