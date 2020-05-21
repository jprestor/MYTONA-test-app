import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import NewsList from '../../news-list';

import './main-page.scss';

const MainPage = () => {
  return (
    <Fragment>
      <h1 className="main-page-title">MYTONA test-app</h1>

      <div className="title-line">
        <h2>Последние новости</h2>
        <Link to="/news/">Все новости</Link>
      </div>

      <NewsList isMainPage />

      <div className="lead font-weight-normal">
        <p className="mt-4 mb-1">Реализовано:</p>
        <ul className="list-group list-group-flush font-weight-light mb-4">
          <li className="list-group-item">
            Страницы:{' '}
            <i className="font-weight-normal">
               Главная, Новости, Карточка новости, Страница авторизации
            </i>
          </li>
          <li className="list-group-item">
            Проверка авторизации с помощью компонента обертки{' '}
            <i className="font-weight-normal">PrivateRoute</i>
          </li>
          <li className="list-group-item">
            На странице <i className="font-weight-normal">Новости</i>:
            постраничная пагинация, с выводом шести записей на странице
          </li>
          <li className="list-group-item">
          Все компоненты реализованы как компоненты-функции с применением{' '}
            <i className="font-weight-normal">Hooks</i>
          </li>
        </ul>
      </div>

      <a
        className="main-page-btn  btn btn-lg btn-dark"
        href="https://github.com/jprestor/MYTONA-test-app"
        target="_blank"
      >
        Исходный код на github
      </a>
    </Fragment>
  );
};

export default MainPage;
