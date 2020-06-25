import React from 'react';
import { Link } from 'react-router-dom';

import './page-header.scss';

const PageHeader = () => {
  return (
    <header className="page-header  navbar-dark  bg-dark">
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <Link className="navbar-brand  nav-link" to="/">
              MyNews-test
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news/">
              Новости
            </Link>
          </li>
          {/* <li className="nav-item  ml-auto">
            <Link className="nav-link" to="/login/">
              Войти
            </Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default PageHeader;
