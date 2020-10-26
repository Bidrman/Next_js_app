import React from 'react'
import { Button } from 'reactstrap'

const WeatherForm = ({ cityName, setCity, searchForecast, deleteList }) => {
    console.log('prislo', cityName, setCity)

    return (
        <div>
            <h3>Zadejte jmeno mesta</h3>
            <input
                type='text'
                value={cityName}
                name='cityName'
                onChange={setCity}
                placeholder={'Název obce'}
            />
            <div className={'w-100 d-flex justify-content-between'}>
                <Button color={'warning'} className={'my-3 font-bold'}>
                    Zjistit, jak bude
                </Button>
                <Button color={'danger'} className={'my-3'}>
                    Smazat vše
                </Button>
            </div>
        </div>
    )
}

export default WeatherForm
