import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
    baseUrl: 'https://samples-demo.frontegg.com',
};

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} headerImage={headerImage}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);
