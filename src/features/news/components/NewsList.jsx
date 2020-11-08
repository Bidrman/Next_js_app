import React, { useState, useCallback } from 'react'
import { Button } from 'reactstrap'

const NewsList = ({ listOfNews }) => {
    return (
        <div className={'newsList__container'}>
            <ul>{listOfNews}</ul>
        </div>
    )
}

export default NewsList
