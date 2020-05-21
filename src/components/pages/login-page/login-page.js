import React, { Component, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { authorize } from '../../../actions';

import Spinner from '../../spinner';
import { LoginService } from '../../../services';
import { bindActionCreators } from 'redux';

import './login-page.scss';

const LoginPage = (props) => {
  const { authorize, loginSuccess, pending, loginError } = props;

  const [login, setLogin] = useState({
    email: 'admin@example.com',
    password: 'admin',
  });

  const { email, password } = login;

  const onSubmit = (e) => {
    e.preventDefault();

    authorize(email, password);
    setLogin({
      email: '',
      password: '',
    });
  };

  if (loginSuccess) {
    return <Redirect to="/" />;
  }

  return (
    <div className="jumbotron">
      <h1>Login</h1>

      <p className="lead  mb-4">
        Email - <i>admin@example.com</i>
        <br />
        Password - <i>admin</i>
      </p>

      <form name="loginForm" onSubmit={onSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              value={password}
            />
          </div>
        </div>

        <input type="submit" value="Login" />

        {pending && <Spinner />}
        {loginError && <p>{loginError.message}</p>}
      </form>
    </div>
  );
};

const mapStateToProps = ({ login: { pending, success, error } }) => {
  return {
    pending: pending,
    loginSuccess: success,
    loginError: error,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { callApi } = new LoginService();

  return bindActionCreators({ authorize: authorize(callApi) }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
