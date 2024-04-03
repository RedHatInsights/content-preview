import React from 'react';
import {
    EmptyState,
    EmptyStateBody,
    EmptyStateIcon,
    EmptyStateActions, EmptyStateHeader, EmptyStateFooter
} from '@patternfly/react-core';
import BanIcon from '@patternfly/react-icons/dist/esm/icons/ban-icon';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoadDetailError = (props) => {
    let bodyMessage;
    if (props.bodyMessage === 'List') {
        bodyMessage = 'Try again later. Or report issue to @insights-rule-dev';
    } else if (props.bodyMessage === 'Detail') {
        bodyMessage = 'Use a right PluginName|ErrorKey in URL and try again... Or report issue to @insights-rule-dev';
    }

    return (
        <EmptyState>
            <EmptyStateHeader titleText={<>Loading Error of{props.bodyMessage}</>} icon={<EmptyStateIcon icon={BanIcon} />} headingLevel="h4" />
            <EmptyStateBody>
                {bodyMessage}
            </EmptyStateBody><EmptyStateFooter>
                <EmptyStateActions>
                Back to <Link to='/preview'>Content Preview</Link>
                </EmptyStateActions>
            </EmptyStateFooter></EmptyState>
    );
};

LoadDetailError.propTypes = {
    bodyMessage: PropTypes.string
};

export default LoadDetailError;
