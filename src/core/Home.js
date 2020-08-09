import React, { useState, useEffect } from "react";
import { getProducts } from "./helper/coreapicalls";
import Base from "./Base";
import Card from "./Card";

import "../styles.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadAllProducts();
  });

  return (
    <Base title="Home Page" description="Welcome to TShirt Store">
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-sm-6 col-md-3 mb-4">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </Base>
  );
};

export default Home;
