import React, { useState } from "react";
import ImageHelper from "./helper/imageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper/index";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload = (f) => f,
}) => {
  const [redirectToCart, setRedirectToCart] = useState(false);
  const [redirectToSignIn, setRedirectToSignIn] = useState(false);

  const cardTitle = product ? product.name : "A photo of Laptop";
  const cardDescription = product ? product.description : "Laptop description";
  const cardPrice = product ? product.price : "4";

  const addToCart = () => {
    if (isAuthenticated()) {
      addItemToCart(product, () => setRedirectToCart(true));
      console.log("Added to cart");
    } else {
      setRedirectToSignIn(true);
      console.log("Login Please!");
    }
  };

  const getARedirectToCart = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const getARedirectToSignIn = (redirect) => {
    if (redirect) {
      return <Redirect to="/signin" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product.id);
            setReload(!reload);
            console.log("Product removed from cart");
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className="card text-white bg-dark border border-info">
      <div className="card-header lead">{cardTitle}</div>
      <div className="card-body">
        {getARedirectToCart(redirectToCart)}
        {getARedirectToSignIn(redirectToSignIn)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap text-center mt-4">
          {cardDescription}
        </p>
        <p className="btn btn-warning rounded  btn-sm px-4">
          ₹ {parseFloat(cardPrice).toFixed(2)}
        </p>
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
