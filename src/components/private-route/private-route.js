// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ loginSuccess, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        loginSuccess ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login/', state: { from: props.location } }} />
          )
      }
    />
  )
};

const mapStateToProps = ({ login }) => {
  return {
    loginSuccess: login.success
  };
};

export default connect(mapStateToProps)(PrivateRoute);