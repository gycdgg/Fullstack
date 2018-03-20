/**
 * Created by kadven on 2017/1/23.
 */
import React from 'react';
import {Route,IndexRoute} from 'react-router';
import { Wrapper,Index,Feature,Service } from './components';
import {NotFound,ServerError,GatewayTimeout} from './components/error_page';
let childRoutes =
    <Route path="/" component={ Wrapper }>
        <IndexRoute component={Index}/>
        // <Route path="feature" component={Feature}/>
        // <Route path="service" component={Service}/>
        // <Route path="500" component={ServerError}/>
        // <Route path="504" component={GatewayTimeout}/>
        // <Route path="*" component={NotFound}/>
    </Route>
export default (childRoutes);