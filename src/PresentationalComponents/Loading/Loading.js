import React from 'react';
import {
    EmptyState,
    EmptyStateIcon, EmptyStateHeader
} from '@patternfly/react-core';

const Loading = () => {
    const Spinner = () => (
        <span className="pf-c-spinner" role="progressbar" aria-valuetext="Loading...">
            <span className="pf-c-spinner__clipper" />
            <span className="pf-c-spinner__lead-ball" />
            <span className="pf-c-spinner__tail-ball" />
        </span>
    );
    return (
        <EmptyState>
            <EmptyStateHeader titleText="Loading" icon={<EmptyStateIcon  icon={Spinner} />} headingLevel="h4" />
        </EmptyState>
    );
};

export default Loading;
