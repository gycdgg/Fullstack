import React from 'react'
import { Route,IndexRoute } from 'react-router'
import { Wrapper,Index } from './components'
import  LazyLoadImage  from './pages/basic/LazyloadImage'
import { NotFound } from './components/error_page'
let childRoutes =
<Route path="/" component={ Wrapper }>
        <IndexRoute component={ Index }/>
        <Route path = "/basic/image" component = { LazyLoadImage }/>
        <Route path="*" component={NotFound} />
    </Route>
export default (childRoutes)