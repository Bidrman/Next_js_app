import React from 'react'

import WeatherFormContainer from '../containers/WeatherFormContainer'
import ForecastListContainer from '../containers/ForecastListContainer'

const Weather = ({ addForm, addCityList }) => {
    return (
        <>
            <div>
                <p>
                    Do pole napište název obce/města z České Republiky a klikněte na tlačítko "Zjistit, jak
                    bude".
                </p>
                <p>Město/obec se vám poté přidá do seznamu sledovaných měst.</p>
                {addForm && <div>{addForm}</div>}
                {addCityList && <div>{addCityList}</div>}
            </div>
        </>
    )
}

export default Weather
