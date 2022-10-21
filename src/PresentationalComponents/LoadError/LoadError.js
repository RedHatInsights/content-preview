import React from 'react';
import {
    Title,
    EmptyState,
    EmptyStateBody,
    EmptyStateIcon,
    EmptyStatePrimary
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
            <EmptyStateIcon icon={BanIcon} />
            <Title size="lg" headingLevel="h4">
                Loading Error of {props.bodyMessage}
            </Title>
            <EmptyStateBody>
                {bodyMessage}
            </EmptyStateBody>
            <EmptyStatePrimary>
                Back to <Link to='/preview'>Content Preview</Link>
            </EmptyStatePrimary>
        </EmptyState>
    );
};

LoadDetailError.propTypes = {
    bodyMessage: PropTypes.string
};

export default LoadDetailError;
