import React, { useState, useEffect } from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import PaymentB from "./PaymentB";
import { Link } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div>
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              product={product}
              removeFromCart={true}
              addtoCart={false}
              reload={reload}
              setReload={setReload}
            />
          );
        })}
      </div>
    );
  };

  return (
    <Base title="Your Cart" description="A curated list by you">
      <div className="row text-center">
        <div className="col-md-6">
          {products && products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h3>No products added</h3>
          )}
        </div>
        <div className="col-md-6">
          {products && products.length > 0 ? (
            <PaymentB products={products} setRelaod={setReload} />
          ) : (
            <h3 className="alert alert-primary">
              Find something <Link to="/">interesting</Link>
            </h3>
          )}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
