import React from 'react'
import { Route,IndexRoute } from 'react-router'
import { Wrapper,Index,ProductWrapper,ProductList,Quota } from './components'
import { NotFound } from './components/error_page'
let childRoutes =
    <Route name = "home" breadcrumbName = "Home" path="/" component={ Wrapper }>
        <IndexRoute component={ Index }/>
        <Route path = "/products" name = "Products" breadcrumbName = "Products" component = { ProductWrapper }>
            <IndexRoute component={ ProductList } breadcrumbName = "List"/>
        </Route>
        <Route path = '/quota' name = 'Get A Quota' breadcrumbName = "Get A Quota" component = {Quota}/>
        <Route path="*" component={NotFound} />
    </Route>
export default (childRoutes)