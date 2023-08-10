import './App.scss';
import '@patternfly/react-core/dist/styles/base.css';

import PropTypes from 'prop-types';
import React from 'react';
import { Routes } from './Routes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const App = () => (
    <div style={{ padding: '1rem' }}>
        <Routes />
    </div>
);
App.propTypes = { history: PropTypes.object };

export default withRouter(connect()(App));
