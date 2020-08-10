import React, { useState, useEffect } from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import PaymentB from "./PaymentB";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div>
        {products &&
          products.map((product, index) => {
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
        <div className="col-md-6">{loadAllProducts(products)}</div>
        <div className="col-md-6">
          <PaymentB products={products} setRelaod={setReload} />
        </div>
      </div>
    </Base>
  );
};

export default Cart;
