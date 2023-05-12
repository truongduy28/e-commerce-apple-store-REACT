import React from "react";
import ProductItem from "./ProductItem";

const ProductsContainer = ({ fetchState }) => {
  const { isLoading, fullProducts } = fetchState;
  return (
    <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
      <section className="py-5">
        <header>
          <p className="small text-muted small text-uppercase mb-1">
            Made the hard way
          </p>
          <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
        </header>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="row">
            {fullProducts.length === 0 ? (
              <h3>No product match with fillter !!!</h3>
            ) : (
              fullProducts.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductsContainer;
