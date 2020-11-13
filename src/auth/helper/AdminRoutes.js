import React, { useReducer } from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "./index";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthenticated().user.role ===1 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default AdminRoute;
