import React, { useState, useEffect } from "react";
import { getProducts } from "./helper/coreapicalls";
import Base from "./Base";
import Card from "./Card";

import "../styles.css";
import * as ReactBootStrap from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setLoading(true);
          setError(data.error);
          console.log(error);
        } else {
          setLoading(false);
          setProducts(data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadAllProducts();
  });

  return (
    <Base title="Work from Home" description="Welcome to Store">
      <div className="row">
        {loading ? (
          <ReactBootStrap.Spinner animation="border" />
        ) : (
          products &&
          products.map((product, index) => {
            return (
              <div key={index} className="col-sm-6 col-md-3 mb-4">
                <Card product={product} />
              </div>
            );
          })
        )}
      </div>
    </Base>
  );
};

export default Home;
