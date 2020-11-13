import React, { useEffect, useState } from "react";
import "../styles.css";
import Base from "./Base";

export default function ContactUs() {
  return (
    <Base title="Contact Us" description="">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h5 className="my-4 text-left">
              {/* <GoLocation /> */}
              AURANGABAD <br />
              <span className="font-weight-light">
                RUSHABH PAVER AND CEMENT PRODUCTS, W-20, MIDC Chikhalthana,
                431005(MS)
              </span>
            </h5>
            <h5 className="my-4 text-left">
              {/* <IoMdCall /> */}
              <a className=" mx-1 text-dark" href="tel:9028339558">
                9028339558
              </a>
              <br />
              <a className=" ml-4 text-dark" href="tel:9960966210">
                9960966210
              </a>
            </h5>
            <h5 className="my-4 text-left">
              {/* <IoIosMail /> */}
              <a
                className="text-dark ml-2"
                href="mailto: gautambrunwal@gmail.com"
              >
                gautambrunwal@gmail.com
              </a>
            </h5>
          </div>
          <div className="col-sm-12 col-md-6">
            <form action="">
              <h5 className="text-left mt-4 mb-3">
                We'll Get in Touch With You
              </h5>
              <div className="form-group" controlId="formBasicPassword">
                <div
                  className="form-control"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group" controlId="formBasicEmail">
                <div
                  className="form-control"
                  type="email"
                  placeholder="Your email"
                />
                <div className="form-text text-muted">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="form-group" controlId="formBasicPassword">
                <div
                  className="form-control"
                  type="Number"
                  placeholder="Contact No."
                />
              </div>

              <button onClick="" className=" btn btn-success btn-block">
                SignIn
              </button>
              <br />
              <br />
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </Base>
  );
}
