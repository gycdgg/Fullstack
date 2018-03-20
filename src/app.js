import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router,browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import finalCreateStore from './store/configureStore';
import routes from './routes';
import reducers from './reducers';
import styles from './styles/app.styl';

const store = finalCreateStore(reducers);
const history = syncHistoryWithStore(browserHistory, store);
render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('App')
)


