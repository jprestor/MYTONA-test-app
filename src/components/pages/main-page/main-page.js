import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <Fragment>
      <h1>MYTONA тестовое задание</h1>

      <h2>Последние новости</h2>

      <div className="news-list">
        <div className="news-list__item  card">
          <div className="news-list__item-img-wrap">
            <img src="" alt="" className="news-list__item-img" />
          </div>

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

            <Link className="btn btn-primary" to="/">Перейти к новости</Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
};

export default MainPage;