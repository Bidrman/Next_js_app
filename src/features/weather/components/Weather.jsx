import React from 'react'
import { Alert } from 'reactstrap'

import WeatherFormContainer from '../containers/WeatherFormContainer'
import ForecastListContainer from '../containers/ForecastListContainer'

const Weather = ({ addForm, addCityList }) => {
    return (
        <>
            <div>
                <Alert color={'warning'}>
                    <strong>
                        Do pole napište název obce/města z České Republiky a klikněte na tlačítko "Zjistit,jak
                        bude".
                    </strong>
                </Alert>
                {addForm && <div>{addForm}</div>}
                {addCityList && <div>{addCityList}</div>}
            </div>
        </>
    )
}

export default Weather
