import React from 'react'
import { Route,IndexRoute } from 'react-router'
import { Wrapper,Index,ProductWrapper } from './components'
import { NotFound } from './components/error_page'
let childRoutes =
<Route path="/" component={ Wrapper }>
        <IndexRoute component={ Index }/>
        <Route path = "/products" component = { ProductWrapper }>
            <IndexRoute component={ Index }/>
        </Route>
        <Route path="*" component={NotFound} />
    </Route>
export default (childRoutes)