import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard";
import Addcategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/Cart";
import ContactUs from "./core/ContactUs";
import AboutUs from "./core/AboutUs";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/user/dashboard" component={UserDashboard} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/create/category" component={Addcategory} />
        <AdminRoute exact path="/admin/categories" component={ManageCategories} />
        <AdminRoute exact path="/admin/create/product" component={AddProduct} />
        <AdminRoute exact path="/admin/products" component={ManageProducts} />
        <AdminRoute exact path="/admin/product/update/:productId" component={UpdateProduct} />
        <AdminRoute exact path="/contact" component={ContactUs} />
        <AdminRoute exact path="/about" component={AboutUs} />
        <AdminRoute exact path="/:categoryId" component={Home}/>
      </Switch>
    </Router>
  );
};

export default Routes;
