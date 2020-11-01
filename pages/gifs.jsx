import React from 'react'
import Head from 'next/head'
import { Container } from 'reactstrap'

import Layout from '../src/components/layout/Layout'
import Header from '../src/components/header'
import NewsContainer from '../src/features/news'

const GifsPage = () => {
    return (
        <Layout>
            <Head>
                <title>Gifs</title>
            </Head>
            <Container>
                <Header />
                <h1>Gifs</h1>
                <NewsContainer />
            </Container>
        </Layout>
    )
}

export default GifsPage
