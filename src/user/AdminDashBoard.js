import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => (
    <div className="card border-info">
      <h4 className="card-header bg-dark border-info text-white">
        Admin Navigator
      </h4>
      <ul className="list-group">
        <li className="list-group-item bg-dark">
          <Link
            to="/admin/create/category"
            className="nav-link text-info bg-dark"
          >
            Create Category
          </Link>
        </li>
        <li className="list-group-item bg-dark">
          <Link to="/admin/categories" className="nav-link text-info bg-dark">
            Manage Category
          </Link>
        </li>
        <li className="list-group-item bg-dark">
          <Link
            to="/admin/create/product"
            className="nav-link text-info bg-dark"
          >
            Create Product
          </Link>
        </li>
        <li className="list-group-item bg-dark">
          <Link to="/admin/products" className="nav-link text-info bg-dark">
            Manage Products
          </Link>
        </li>
        <li className="list-group-item bg-dark">
          <Link to="/admin/orders" className="nav-link text-info bg-dark">
            Manage Orders
          </Link>
        </li>
      </ul>
    </div>
  );
  
  const adminRightSide = () => (
    <div className="card mb-4">
      {/* <h4 className="card-heade text-dark text-center">Admin Information</h4>
      <ul className="list-group">
        <li className="list-group-item float-left text-dark">
          <span className="badge badge-info bg-info mr-2">Name:</span> {name}
        </li>
        <li className="list-group-item float-left text-dark">
          <span className="badge badge-info bg-info mr-2">Email:</span> {email}
        </li>
        <li className="list-group-item float-left text-dark">
          <span className="bagde badge-warning">Admin Previllages</span>
        </li> 
      </ul> */}
    </div>
  );
  return (
    <Base
      title="AdminDashboard page"
      className="p-5 border border-info container"
    >
      <div className="row">
        <div className="col-3"> {adminLeftSide()}</div>
        <div className="col-9"> {adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
