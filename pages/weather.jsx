import React from 'react'
import Head from 'next/head'
import { Container } from 'reactstrap'

import Layout from '../src/components/layout/Layout'
import Header from '../src/components/header'
import WeatherContainer from '../src/features/weather'

const WeatherPage = () => {
    return (
        <Layout>
            <Head>
                <title>Weather forecast</title>
            </Head>
            <Container>
                <Header />
                <h1>Weather</h1>
                <WeatherContainer />
            </Container>
        </Layout>
    )
}

export default WeatherPage
