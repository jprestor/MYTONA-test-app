import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { NewsService, NewsServiceProvider } from './services';
import store from './store.js';

import App from './components/app';

const newsService = new NewsService();

ReactDom.render(
  <Provider store={store}>
    <NewsServiceProvider value={newsService}>
      <Router basename="/">
        <App />
      </Router>
    </NewsServiceProvider>
  </Provider >,
  document.getElementById('root')
);