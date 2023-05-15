import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { API } from "../ENV_KEY";

import ProductShow from "../components/ProductDetails/ProductShow";
import { Header } from "../components/Layout";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProductData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${API}/products/${id}`);
        setproduct(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getProductData();
  }, [id]);

  return (
    <div className="page-holder">
      <Header />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : product ? (
        <>
          <ProductShow product={product} />
        </>
      ) : (
        <h3>Product can't display or oops Server </h3>
      )}
    </div>
  );
};

export default ProductDetailsPage;
