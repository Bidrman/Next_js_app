import React, { useState, useCallback, useEffect, useRef } from 'react'

import { countries } from '../countries/countries'
import NewsFormContainer from './NewsFormContainer'
import NewsListContainer from './NewsListContainer'
import News from '../components/News'

const NewsContainer = () => {
    const newsForm = <NewsFormContainer countries={countries} />
    const newsList = <NewsListContainer />

    return <News addNewsForm={newsForm} addNewsList={newsList} />
}

export default NewsContainer
