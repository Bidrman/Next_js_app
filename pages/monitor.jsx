import React from 'react'
import Head from 'next/head'
import { Container } from 'reactstrap'

import Layout from '../src/components/layout/Layout'
import Header from '../src/components/header'
import CryptoMonitorContainer from '../src/features/crypto'

const MonitorPage = () => {
    return (
        <Layout>
            <Head>
                <title>Monitoring crypto</title>
            </Head>
            <Container>
                <Header />
                <h1>Crypto Monitor</h1>
                <CryptoMonitorContainer />
            </Container>
        </Layout>
    )
}

export default MonitorPage
