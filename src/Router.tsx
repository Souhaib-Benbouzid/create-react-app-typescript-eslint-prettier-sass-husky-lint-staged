import React, { lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

const HomeView = lazy(() => import('./views/Home'));

export default function App() {
  const layout = MainLayout;
  console.log('test');

  return (
    <Suspense fallback={<div>LOADING ...</div>}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <RouteWithLayout
          exact
          component={HomeView}
          layout={layout}
          path="/home"
        />
        <Redirect to="/not-found" />
      </Switch>
    </Suspense>
  );
}
