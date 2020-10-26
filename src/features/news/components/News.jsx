import React, { useState, useCallback } from 'react'
import { Button } from 'reactstrap'

const News = React.memo(({ phrase, setPhrase, findGifs, deleteGifs, results }) => {
    console.log('FRAZ', phrase)
    return (
        <div>
            <label className={'mr-2'}>Gif name</label>
            <input
                type='text'
                name='phrase'
                value={phrase}
                onChange={setPhrase}
                placeholder='find gif'
                className={'mb-3'}
            />
            <div className={'mb-4'}>
                <Button color={'info'} className={'mr-2'} onClick={findGifs}>
                    Odeslat dotaz
                </Button>
                <Button color={'danger'} onClick={deleteGifs}>
                    Clear results
                </Button>
            </div>
            {results && <div>{results}</div>}
        </div>
    )
})

export default News
