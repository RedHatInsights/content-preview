import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Loading from './PresentationalComponents/Loading/Loading';
import ErrorBoundary from './PresentationalComponents/ErrorBoundary/ErrorBoundary';
import LoadError from './PresentationalComponents/LoadError/LoadError';

const List = lazy(() => import(/* webpackChunkName: "List" */ './SmartComponents/Recs/List'));
const Details = lazy(() => import(/* webpackChunkName: "Details" */ './SmartComponents/Recs/Details'));
const paths = { list: '/preview', details: '/preview/:recDetail' };


export const Routes = () => <Switch>
    <Route exact path={paths.list}
        component={() => (
            <ErrorBoundary fallback={<LoadError bodyMessage='List' />}>
                <Suspense fallback={<Loading />}> <List /> </Suspense>
            </ErrorBoundary>
        )}
    />
    <Route exact path={paths.details}
        component={() => (
            <ErrorBoundary fallback={<LoadError bodyMessage='Detail' />}>
                <Suspense fallback={<Loading />}> <Details /> </Suspense>
            </ErrorBoundary>
        )}
    />
    <Redirect path='*' to={paths.list} push>
    </Redirect>
</Switch>;
