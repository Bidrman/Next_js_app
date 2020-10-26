import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'

import { useForm } from '../hooks/useForm'
import { useFetch } from '../hooks/useFetch'

const Login = ({signIn}) => {
    //useState
    const [values, handleChange] = useForm({ email: '', password: '' })

    const [count, setCount] = useState(0)
    // TOHLE nejde kvuli nextu, protoze ma SSR, kde neni vydefinovany localStorage
    // useEffect(() => {
    //     localStorage.setItem('count', JSON.stringify(count))
    // }, [count])

    //FETCH!!
    const url = `http://numbersapi.com/${count}`

    const { data, loading } = useFetch(url)

    return (
        <div>
            {/* {<div>
                <label>Mail</label>
                <input name='email' value={values.email} onChange={handleChange} />
            </div>

            <div>
                <label>Password</label>
                <input type='password' name='password' value={values.password} onChange={handleChange} />
            </div>
            <Button>Log in</Button>} */}

            <Button onClick={() => signIn}>Login with Google</Button>


            {/* <div> Count: {count}</div>
            <div>
                <Button onClick={() => setCount((c) => c + 1)}>Add Count</Button>
            </div>
            <div>
                <h4>{loading ? 'loading...' : data}</h4>
            </div> */}
        </div>
    )
}

export default Login
