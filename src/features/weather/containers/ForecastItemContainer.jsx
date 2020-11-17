import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

import ForecastItem from '../components/ForecastItem'
import Jasno from '../../../components/icons/jasno'
import PoloJasno from '../../../components/icons/polojasno'
import SkoroJasno from '../../../components/icons/skorojasno'
import Oblacno from '../../../components/icons/oblacno'
import styles from '../styles/Forecast.module.scss'

const ForecastItemContainer = ({ date, forecast, city }) => {
    const showData = forecast.map((item, index) => {
        const time = item.dt_txt.match(/\s[0-9:]{5}/)
        const wind = item.wind.speed * 3.6

        return (
            <li key={index} className={'d-flex flex-row'}>
                <Card className={`${styles.card} d-flex py-3 px-3 mx-3`}>
                    <CardTitle className={'d-flex flex-column'}>
                        <span className={'font-17'}>{time}</span>
                        <span className={'mx-auto'}>
                            {item.weather[0].description === 'jasno' ? <Jasno width='60' height='60' /> : ''}
                            {item.weather[0].description === 'polojasno' ? (
                                <SkoroJasno width='60' height='60' />
                            ) : (
                                ''
                            )}
                            {item.weather[0].description === 'skoro jasno' ? (
                                <SkoroJasno width='60' height='60' />
                            ) : (
                                ''
                            )}
                            {item.weather[0].description === 'oblačno' ? (
                                <PoloJasno width='60' height='60' />
                            ) : (
                                ''
                            )}
                            {item.weather[0].description === 'zataženo' ? (
                                <Oblacno width='60' height='60' />
                            ) : (
                                ''
                            )}
                        </span>
                        <span className={'mx-auto'}>{item.weather[0].description}</span>
                    </CardTitle>
                    <CardText className={'d-flex flex-column'}>
                        <span className={'font-bold font-22 p-1 mx-auto mb-1 border-bottom'}>
                            {item.main.temp.toFixed(1)}&nbsp;°C
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
