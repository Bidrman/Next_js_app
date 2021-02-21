import React, { useEffect, useState } from 'react'
// import { Button } from 'reactstrap'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { useStyles } from '../styles/styles'

import styles from '../styles/login.module.scss'

const Login = ({ userId, setToken, values, handleChange }) => {
    const classes = useStyles()
    //FETCH!!
    //  const url = `http://numbersapi.com/${count}`

    // const { data, loading } = useFetch(url)

    return (
        <div>
            <div>
                <span>
                    user ID: <b className={` ${styles.id}`}>{userId}</b>
                </span>
            </div>
            <div>
                <div>
                    <TextField
                        id='email'
                        name='email'
                        label='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        id='password'
                        name='password'
                        label='password'
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={classes.root}>
                <Button
                    variant='contained'
                    onClick={(e) => {
                        setToken(e.target.className)
                    }}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login
