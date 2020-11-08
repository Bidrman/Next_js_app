import React from 'react'
import { Button } from 'reactstrap'

const WeatherForm = ({ cityName, setCity, searchForecast, deleteList, display }) => {
    return (
        <div>
            <div className={'w-100 d-flex justify-content-between'}>
                <div className={'w-50'}>
                    <input
                        type='text'
                        value={cityName}
                        name='cityName'
                        onChange={setCity}
                        placeholder={'Název obce'}
                        className={'w-100'}
                    />
                </div>
                <div className={'mb-3'}>
                    <Button color={'warning'} className={'font-bold search'} onClick={searchForecast}>
                        Zjistit, jak bude
                    </Button>
                    <Button color={'danger'} className={'mx-2'} onClick={deleteList}>
                        Smazat vše
                    </Button>
                </div>
            </div>
            {display}
        </div>
    )
}

export default WeatherForm
