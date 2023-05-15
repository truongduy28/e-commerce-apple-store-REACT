import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../ENV_KEY";
import ProductItem from "../FullProduct/ProductItem";

const ProductRandom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productRandom, setProductRandom] = useState([]);

  useEffect(() => {
    const getRandomProduct = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${API}/products/random-8-products`);
        setProductRandom(data);
      } catch (error) {}
      setIsLoading(false);
    };
    getRandomProduct();
  }, []);

  return (
    <>
      <section className="py-5">
        <header>
          <p className="small text-muted small text-uppercase mb-1">
            Made the hard way
          </p>
          <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
        </header>

        {isLoading ? (
          <h2>Loading... </h2>
        ) : productRandom.length === 0 ? (
          <h2>Can't load products or server is stoped!</h2>
        ) : (
          <div className="row">
            {productRandom.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default ProductRandom;
