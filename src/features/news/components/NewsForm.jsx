import React, { useState, useCallback } from 'react'

const NewsForm = ({ buttons, searchButton }) => {
    return (
        <div className={'buttons__wrapper mx-auto w-50 d-flex flex-column'}>
            <div className={'d-flex flex-row justify-content-between mb-3'}>{buttons}</div>
            <div className={'search-btn'}>{searchButton}</div>
        </div>
    )
}

export default NewsForm
