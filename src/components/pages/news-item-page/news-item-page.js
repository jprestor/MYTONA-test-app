import React, { useContext, useEffect, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { NewsServiceContext } from '../../../services/context';
import { fetchData } from '../../../actions';

import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';

import './news-item-page.scss';

const NewsItemPage = ({ item }) => {
  const { title, author, text, image } = item;

  return (
    <Fragment>
      <h1>{title}</h1>

      <div className="news-page-content">
        <p className="news-page-content__author">{author}</p>

        <div className="news-page-content__info">
          <p className="news-page-content__text">{text}</p>
          <img className="news-page-content__img" src={image} />
        </div>
      </div>
    </Fragment>
  );
};

const NewsItemPageContainer = (props) => {
  const { fetchData, items, error, loading, match } = props;
  const { getData } = useContext(NewsServiceContext);

  const { id } = match.params;
  const item = items.find((i) => i.id === id);

  useEffect(() => {
    fetchData(getData);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <NewsItemPage item={item} />;
};

const mapStateToProps = ({ news: { items, loading, error } }) => {
  return {
    items,
    error,
    loading,
  };
};

const mapDispatchToProps = {
  fetchData,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(NewsItemPageContainer);
