import React, { useState, useCallback } from 'react'
import { Button } from 'reactstrap'

const News = ({ addNewsForm, addNewsList }) => {
    return (
        <div className={'news__container'}>
            <div className={'mb-4'}>{addNewsForm}</div>
            <div className={'d-flex justify-content-center'}>{addNewsList}</div>
        </div>
    )
}

export default News
