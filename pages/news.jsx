import React from 'react'
import Head from 'next/head'
import { Container } from 'reactstrap'

import Layout from '../src/components/layout/Layout'
import Header from '../src/components/header'
import NewsContainer from '../src/features/news'

const NewsPage = () => {
    return (
        <Layout>
            <Head>
                <title>News</title>
            </Head>
            <Container>
                <Header />
                <h1 className={'text-center mb-3'}>Zpravodajství</h1>
                <NewsContainer />
            </Container>
        </Layout>
    )
}

export default NewsPage
