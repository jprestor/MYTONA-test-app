import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PageHeader from '../page-header';
import PageFooter from '../page-footer';
import { MainPage, NewsPage, LoginPage } from '../pages';

const App = () => {
  return (
    <Fragment>
      <PageHeader />

      <main className="page-main  container">
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/news/" component={NewsPage} />
          <Route path="/login/" component={LoginPage} />
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </main>

      <PageFooter />
    </Fragment>
  );
};

export default App;