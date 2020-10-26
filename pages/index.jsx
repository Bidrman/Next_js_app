import React from 'react'
import Head from 'next/head'
import { Container } from 'reactstrap'

import Layout from '../src/components/layout/Layout'
import Header from '../src/components/header'

const Homepage = () => {
    return (
        <Layout>
            <Head>
                <title>Welcome traveler</title>
            </Head>
            <Container>
                <Header />
                <h1>Homepage</h1>
            </Container>
        </Layout>
    )
}

export default Homepage
