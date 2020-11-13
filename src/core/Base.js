import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { getCategories } from "../admin/helper/adminapicall";

const Base = ({
  title = "",
  description = "",
  className = "bg-dark text-white ",
  children,
}) => {
  const [values, setValues] = useState({ categories: [] });
  const { categories } = values;

  const preload = () => {
    getCategories().then((data) => {
      // console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      {/* <footer className="footer bg-dark mt-auto py-3">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container">
        <span className="text-muted">
          An Amazing <span className="text-white">MERN</span> Bootcamp
        </span>
      </div>
    </footer> */}
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Amazing Tshirt Store</h1>

          <address>
            <br />
            <a
              size="lg"
              color="info"
              className="footer__btn btn-color"
              href="mailto:rushabh22runwal@gmail.com"
            >
              Email Us
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Nav</h2>

            <ul className="nav__ul">
              <li>
                <a href="/">DashBoard</a>
              </li>

              <li>
                <a href="/">Cart</a>
              </li>

              <li>
                <a href="/">About Us</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Collections</h2>

            <ul className="nav__ul nav__ul--extra">
              {categories &&
                categories.map((cate, index) => (
                  <li key={index}>
                    <a href={`/${cate._id}`}>
                      {cate.name}
                    </a>
                  </li>
                ))}
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="/">Privacy Policy</a>
              </li>

              <li>
                <a href="/">Terms of Use</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2020 Amaing Tshirt Store.</p>

          <div className="legal__links">
            <span>
              Made with ♥ by
              <a href="https://rushabh-me.netlify.app/" className="heart">
                <span> Rushabh Runwal </span>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Base;
