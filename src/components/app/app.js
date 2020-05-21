import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from '../private-route';
import PageHeader from '../page-header';
import PageFooter from '../page-footer';
import { MainPage, NewsPage, NewsItemPage, LoginPage } from '../pages';
import './app.scss';

const App = () => {
  return (
    <Fragment>
      <PageHeader />

      <main className="page-main  container">
        <Switch>
          <PrivateRoute path="/" component={MainPage} exact />
          <PrivateRoute path="/news/" component={NewsPage} exact />
          <PrivateRoute path="/news/:id" component={NewsItemPage} />
          <Route path="/login/" component={LoginPage} />
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </main>

      <PageFooter />
    </Fragment>
  );
};

export default App;
