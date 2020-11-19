import React from 'react'
import Head from 'next/head'
import { Container } from 'reactstrap'

import Layout from '../src/components/layout/Layout'
import Header from '../src/components/header'
import NewsContainer from '../src/features/news'

const MonitorPage = () => {
    return (
        <Layout>
            <Head>
                <title>Monitoring crypto</title>
            </Head>
            <Container>
                <Header />
                <h1>Crypto Monitor</h1>
                coming soon...
            </Container>
        </Layout>
    )
}

export default MonitorPage
