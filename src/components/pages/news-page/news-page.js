import React, { Fragment } from 'react';

import NewsList from '../../news-list';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <NewsList isMainPage={false} />
    </Fragment>
  )
};

export default NewsPage;