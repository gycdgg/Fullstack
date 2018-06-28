import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Wrapper, Index, ProductWrapper, ProductList, Quote, Product, About, Layout } from './components'
import { NotFound } from './components/error_page'
let childRoutes =
    <Route name = "home" breadcrumbName = "Home" path="/" component={ Wrapper }>
        <IndexRoute component={ Index }/>
        <Route path = "/products" name = "Products" breadcrumbName = "Products" component = { ProductWrapper }>
            <IndexRoute component={ ProductList } breadcrumbName = "List"/>
            <Route path = ":id" name = "Product" breadcrumbName = "Product" component = { Product }/>
        </Route>
        <Route path = "/quote" name = "Get A Quote" breadcrumbName = "Get A Quote" component = {Quote}/>
        <Route path = "/about" name = "About us" breadcrumbName = "About us" component = {About}/>
        <Route path = "/console"  component = {Layout}>
            <Route path = "login" component = { About }/>
        </Route>
        <Route path="*" component={NotFound} />
    </Route>
export default (childRoutes)