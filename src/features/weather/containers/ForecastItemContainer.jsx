import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

import ForecastItem from '../components/ForecastItem'
import styles from '../styles/Forecast.module.scss'

const ForecastItemContainer = ({ date, forecast, city }) => {
    const showData = forecast.map((item) => {
        const time = item.dt_txt.match(/\s[0-9:]{5}/)
        const wind = item.wind.speed * 3.6

        return (
            <li className={'d-flex flex-row'}>
                <Card className={`${styles.card} d-flex py-3 px-3 mx-3`}>
                    <CardTitle className={'d-flex flex-column'}>
                        <span className={'font-17'}>{time}</span>
                        <span className={'mx-auto'}>IKONA</span>
                        <span className={'mx-auto'}>{item.weather[0].description}</span>
                    </CardTitle>
                    <CardText className={'d-flex flex-column'}>
                        <span className={'font-bold font-22 p-1 mx-auto mb-1 border-bottom'}>
                            {item.main.temp.toFixed(1)} °C
                        </span>
                        <span>pocitově: {item.main.feels_like.toFixed(1)} °C</span>
                        <span>vlhkost: {item.main.humidity} %</span>
                        <span>vítr: {wind.toFixed(1)} km/h</span>
                        <span></span>
                    </CardText>
                </Card>
            </li>
        )
    })

    return <ForecastItem city={city} showData={showData} />
}

export default ForecastItemContainer
