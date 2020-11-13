import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";

const Signin = () => {
  const [values, setValues] = useState({
    email: "rushabh22runwal@gmail.com",
    password: "rushabh@22",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;

  const { user } = isAuthenticated();

  const handleChange = (field) => (event) => {
    setValues({ ...values, error: false, [field]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch((e) => {
        alert("error in signing in:", e);
      });
  };

  const performRedirect = () => {
    if (didRedirect) {
      console.log(user);
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-4 offset-sm-4 text-left">
          <form action="">
            <div className="form-gropu">
              <label className="text-light"> Email </label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                value={email}
                type="email"
              />
            </div>
            <div className="form-gropu">
              <label className="text-light"> Password </label>
              <input
                className="form-control"
                value={password}
                onChange={handleChange("password")}
                type="password"
              />
            </div>
            <br />
            <button onClick={onSubmit} className=" btn btn-success btn-block">
              SignIn
            </button>
          </form>
        </div>
      </div>
    );
  };

  const loadingMessage = () => {
    return loading && <div className="alert alert-info">loading ...</div>;
  };
  const errorMessage = () => {
    return (
      <div
        style={{ display: error ? "" : "none" }}
        className="alert alert-danger"
      >
        {error}
      </div>
    );
  };

  return (
    <Base title="Sign-In Page" description="Sign-in to get amazed!">
      {signInForm()}
      {loadingMessage()}
      {errorMessage()}
      {performRedirect()}
      <p className="text-center text-white">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
