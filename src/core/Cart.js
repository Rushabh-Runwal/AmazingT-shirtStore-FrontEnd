import React, { useEffect, useState } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import getProducts from "./helper/coreapicalls";
import { loadCart } from "./helper/CartHelper";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProduct = () => {
    return (
      <div>
        {products.map((eachProd, index) => {
          return (
            <Card
              key={index}
              product={eachProd}
              removeFromCart={true}
              addToCart={false}
              setReload={setReload}
              reload={reload}
            />
          );
        })}
      </div>
    );
  };

  const loadCheckOut = () => {
    return <div>CheckOuT</div>;
  };

  return (
    <Base title="Your Cart" description="Ready to Check Out">
      <div className="row text-center">
        <div className="col-6">{loadAllProduct()}</div>
        <div className="col-6">{loadCheckOut()}</div>
      </div>
    </Base>
  );
};

export default Cart;
