/* eslint-disable max-len */
import './_List.scss';

import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';
import React, { Suspense, lazy, useEffect } from 'react';
import { fetchContent, fetchContentHits } from '../../store/Actions';

import { Alert } from '@patternfly/react-core';
import HostSelector from '../../PresentationalComponents/HostSelector/HostSelector';
import Loading from '../../PresentationalComponents/Loading/Loading';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const CotentTable = lazy(() => import('../../PresentationalComponents/ContentTable/ContentTable'));

const List = ({ content, fetchContent, contentFetchStatus, contentHits, fetchContentHits, contentHitsFetchStatus }) => {
    const rejected = (fetchingWhat) => `There was an issue fetching ${fetchingWhat}, likely you're using chrome and the network tab will show '(failed)net::ERR_CERT_INVALID'
    to solve this error visit the production url and add the security exception`;
    useEffect(() => {
        fetchContentHits();
        fetchContent();
    }, [fetchContent, fetchContentHits]);
    return <React.Fragment>
        <PageHeader>
            <PageHeaderTitle title='Content Preview App' />
            <HostSelector />
        </PageHeader>
        <div className='pf-l-page__main-section pf-c-page__main-section'>
            <Suspense fallback={<Loading />}>
                {contentFetchStatus === 'pending' && <Loading />}
                {contentFetchStatus === 'fulfilled' && <CotentTable data={content} hits={contentHits} />}
                {contentFetchStatus === 'rejected' && <Alert variant="danger" isInline title={rejected('contents')} />}
                {contentHitsFetchStatus === 'rejected' && <Alert variant="danger" isInline title={rejected('hits')} />}
            </Suspense>
        </div>
    </React.Fragment>;
};

List.propTypes = {
    fetchContent: PropTypes.func,
    contentFetchStatus: PropTypes.string,
    content: PropTypes.array,
    fetchContentHits: PropTypes.func,
    contentHitsFetchStatus: PropTypes.string,
    contentHits: PropTypes.object
};

const mapStateToProps = ({ CPStore }) => ({
    content: CPStore.content,
    contentFetchStatus: CPStore.contentFetchStatus,
    contentHits: CPStore.contentHits,
    contentHitsFetchStatus: CPStore.contentHitsFetchStatus
});

const mapDispatchToProps = dispatch => ({
    fetchContent: () => dispatch(fetchContent()),
    fetchContentHits: () => dispatch(fetchContentHits())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(List));
