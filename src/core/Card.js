import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/Imagehelper";
import { Redirect } from "react-router-dom";
import { AddItemToCard, removeItemfromCard } from "./helper/CartHelper";

const Card = ({
  product,
  addToCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [redirect, SetRedirect] = useState(false);

  const cardTitle = product ? product.name : "Amazing T-shirt";
  const cardDescription = product ? product.description : "Amazing T-shirt";
  const cardPrice = product ? product.price : "99";

  const goToCart = () => {
    AddItemToCard(product, () => SetRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="./cart" />;
    }
  };

  const showAddToCart = (addToCart) => {
    return (
      addToCart && (
        <div className="col-12">
          <button
            onClick={() => {
              goToCart();
            }}
            className="btn btn-block btn-outline-info mb-2"
          >
            Add to Cart
          </button>
        </div>
      )
    );
  };

  const showRemoveToCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <div className="col-12">
          <button
            onClick={() => {
              removeItemfromCard(product._id);
              setReload(!reload);
            }}
            className="btn btn-block btn-outline-danger mb-2"
          >
            Remove from cart
          </button>
        </div>
      )
    );
  };

  return (
    <div className="card text-white bg-dark ">
      <div className="card-body">
        <ImageHelper product={product} />
        {getARedirect(redirect)}
        <div className="card-header bg-info p-0 pl-2 lead">{cardTitle}</div>
        <p className="lead pl-2 font-weight-normal text-wrap">
          {cardDescription}
        </p>
        <div className="row">
          <div className="col-4">
            <span className="btn btn-block btn-info rounded btn-sm ">
              $ {cardPrice}
            </span>
          </div>
          <div className="col-8">
            {" "}
            {showAddToCart(addToCart)}
            {showRemoveToCart(removeFromCart)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
