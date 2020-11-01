import React from 'react'
import { Button } from 'reactstrap'

const WeatherForm = ({ cityName, setCity, searchForecast, deleteList, display }) => {
    return (
        <div>
            <input
                type='text'
                value={cityName}
                name='cityName'
                onChange={setCity}
                placeholder={'Název obce'}
            />
            <div className={'w-100 d-flex justify-content-between'}>
                <Button color={'warning'} className={'my-3 font-bold search'} onClick={searchForecast}>
                    Zjistit, jak bude
                </Button>
                <Button color={'danger'} className={'my-3'} onClick={deleteList}>
                    Smazat vše
                </Button>
            </div>
            {display}
        </div>
    )
}

export default WeatherForm
