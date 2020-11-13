import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { createCategory } from "./helper/adminapicall";

const Addcategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, token } = isAuthenticated();
  const goBack = () => {
    return (
      <div className="mt-2">
        <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">
          Admin Home
        </Link>
      </div>
    );
  };
  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // BackEnd req fired

    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Category Created Successfully</h4>;
    }
  };
  const warningMessage = () => {
    if (error) {
      return <h4 className="text-warning">Error in creating Category</h4>;
    }
  };
  const MyCategoryForm = () => {
    return (
      <form className="p-3">
        {successMessage()}
        {warningMessage()}
        <h1 className="">Enter the Category</h1>
        <input
          type="text"
          autoFocus
          required
          value={name}
          onChange={handleChange}
          placeholder="ex: End of Season"
          className="form-contrl my-3 w-100 "
        />
        <button onClick={onSubmit} className="btn-outline-info btn-lg">
          Create Category
        </button>
        {goBack()}
      </form>
    );
  };

  return (
    <div>
      <Base
        title="Create a category here"
        description="Add collection name for tshirts"
        className="container bg-info p-4 mt-5"
      >
        <div className="bg-white rounded row">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-black-50">{MyCategoryForm()}</h1>
          </div>
        </div>
      </Base>
    </div>
  );
};

export default Addcategory;
