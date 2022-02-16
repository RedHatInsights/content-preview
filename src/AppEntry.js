import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { init } from './store';
import logger from 'redux-logger';

const AppEntry = () => <Provider store={ init(logger).getStore() }>
    <Router>
        <App/>
    </Router>
</Provider>;

export default AppEntry;
