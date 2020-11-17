import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Card, CardImg, CardText, CardTitle, Button } from 'reactstrap'

import NewsList from '../components/NewsList'

import styles from '../styles/NewsListContainer.module.scss'

const NewsListContainer = () => {
    const reduxNews = useSelector((state) => state.news.news)
    const [numberOfNews, setNumberOfNews] = useState(10)
    const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    // }, [numberOfNews])

    const filteredNews = reduxNews.filter((article, index) => index <= numberOfNews)
    const listOfNews = filteredNews.map((article) => {
        const title = article.title.match(/^(.*)( - )/)[1]

        return (
            <li className={'mb-4'}>
                <Card className={`${styles.card} border-0`}>
                    <CardTitle>
                        <h4>{title}</h4>
                    </CardTitle>
                    <CardImg src={article.urlToImage} alt={title} />
                    <CardText className={'font-17 text-justify my-2'}>{article.description}</CardText>
                    <Button color={'light'} className={''}>
                        <a href={article.url} target='blank' className={'font-18'}>
                            Číst více
                        </a>
                    </Button>
                </Card>
            </li>
        )
    })

    return <NewsList listOfNews={listOfNews} />
}

export default NewsListContainer
