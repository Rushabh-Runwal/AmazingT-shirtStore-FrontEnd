import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { getCategories } from "./helper/adminapicall";

const Managecategorys = () => {
  const [categorys, setcategorys] = useState([]);

  const preload = () => {
    getCategories().then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setcategorys(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);


  return (
    <Base title="Welcome admin" description="Manage categorys here">
      <h2 className="mb-4">All categorys:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">
            Total {categorys.length} categorys
          </h2>

          {categorys.map((prod, ind) => {
            return (
              <div key={ind} className="row text-center mb-2 ">
                <div className="col-4">
                  <h3 className="text-white text-left">{prod.name}</h3>
                </div>
                <div className="col-4">
                  <Link
                    className="btn btn-success"
                    to={`/admin/category/update/${prod._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};
export default Managecategorys;
