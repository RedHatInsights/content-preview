import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Loading from './PresentationalComponents/Loading/Loading';

const List = lazy(() => import(/* webpackChunkName: "List" */ './SmartComponents/Recs/List'));
const Details = lazy(() => import(/* webpackChunkName: "Details" */ './SmartComponents/Recs/Details'));
const paths = { list: '/preview/', details: '/preview/:recDetail' };

export const Routes = () => <Switch>
    <Route key='List' exact path={paths.list} rootClass='root'
        component={() => <Suspense fallback={<Loading />}> <List /> </Suspense>} />
    <Route key='Details' exact path={paths.details} rootClass='root'
        component={() => <Suspense fallback={<Loading />}> <Details /> </Suspense>} />
    <Redirect path='*' to={paths.list} push />
</Switch>;
