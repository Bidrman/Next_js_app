import React from 'react'

const ForecastItem = ({ city, showData }) => {
    return (
        <div className={'border-top pb-3'}>
            <div className={'my-3'}>
                <h3>{city}</h3>
            </div>
            <ul className={'forecast__item d-flex justify-content-center'}>{showData}</ul>
        </div>
    )
}

export default ForecastItem
