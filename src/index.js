import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'

import { FronteggProvider } from '@frontegg/react';

const store = configureStore(/* provide initial state if any */)

const contextOptions = {
    baseUrl: 'https://samples-demo.frontegg.com',
};

ReactDOM.render(
    <Provider store={store}>
        <FronteggProvider contextOptions={contextOptions} history={history}>
            <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
                    <App />
            </ConnectedRouter>
        </FronteggProvider>
    </Provider>,
    document.getElementById('root')
);
