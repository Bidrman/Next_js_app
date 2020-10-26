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
                {/* <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none'; srcript-src *;"></meta> */}
                <script type="text/javascript" src="https://apis.google.com/js/api.js"></script>
            </Head>
            <Container>
                <h1>Login</h1>
                <LoginContainer/>
            </Container>
        </Layout>
    )
}

export default LoginPage
