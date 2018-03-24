/**
 * Created by kadven on 2017/1/23.
 */
import React from 'react';
import {Route,IndexRoute} from 'react-router';
import { Wrapper,Index } from './components';
import {NotFound,ServerError,GatewayTimeout} from './components/error_page';
let childRoutes =
    <Route path="/" component={ Wrapper }>
        <IndexRoute component={Index}/>
    </Route>
export default (childRoutes);