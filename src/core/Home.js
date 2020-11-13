import React, { useEffect, useState } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import getProducts from "./helper/coreapicalls";

export default function Home({ match }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadProducts = (categoryId) => {
    getProducts().then((data) => {
      if (categoryId) {
        let temp = [];
        data.map((each, i) => {
          if (each.category._id === categoryId) {
            temp.push(each);
          }
        });
        data = temp;
      }
      console.log(data);
      if(data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadProducts(match.params.categoryId);
  }, []);

  return (
    // <Base title="Home Page" description="Welcome to the Tshirt Store">
    <Base>
      <div className="container-fluid text-center mb-5">
        <img
          src="https://image.shutterstock.com/image-vector/youre-amazing-colorful-vector-typography-260nw-1559425862.jpg"
          alt=""
          style = {{ filter: "grayscale(100%)"}}
        />
      </div>
      <div className="row text-left">
        {products.map((each, i) => {
          return (
            <div className="col-md-4  col-xs-5 mb-4" key={i}>
              <Card product={each} />
            </div>
          );
        })}
      </div>
    </Base>
  );
}
