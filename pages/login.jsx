import React from 'react'
import Head from 'next/head'
import { Container } from 'reactstrap'

import Layout from '../src/components/layout/Layout'
import LoginContainer from '../src/features/login/containers/LoginContainer'

const LoginPage = () => {
    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <Container>
                <h1>Login</h1>
                <LoginContainer />
            </Container>
        </Layout>
    )
}

export default LoginPage
