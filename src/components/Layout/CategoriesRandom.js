import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../../ENV_KEY";
import { Link } from "react-router-dom";
const CategoriesRandom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [randomCategory, setRandomCategory] = useState([]);

  useEffect(() => {
    const getRandomCategory = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${API}/categorys/random-categories`);
        setRandomCategory(data);
      } catch (error) {}
      setIsLoading(false);
    };
    getRandomCategory();
  }, []);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : randomCategory.length === 0 ? (
    <h2>Chua co</h2>
  ) : (
    <>
      <section className="pt-5">
        <header className="text-center">
          <p className="small text-muted small text-uppercase mb-1">
            CAREFULLY CREATED COLLECTIONS
          </p>
          <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
        </header>
        <div className="row align-items-center">
          <div className="col-md-4">
            <Link className="category-item " to="/products">
              <img
                className="img-fluid max-w-h-cate-in-home-1-4"
                src={randomCategory[0].img}
                alt=""
                style={{ objectFit: "cover", width: 413, height: 519 }}
              />
              <strong className="category-item-title text-secondary ">
                {randomCategory[0].name}
              </strong>
            </Link>
          </div>
          <div className="col-md-4">
            <Link className="category-item mb-4 " to="/products">
              <img
                className="img-fluid max-w-h-cate-in-home-2-3"
                src={randomCategory[1].img}
                alt=""
                style={{ objectFit: "cover", width: 413, height: 275 }}
              />
              <strong className="category-item-title text-secondary">
                {randomCategory[1].name}
              </strong>
            </Link>
            <Link className="category-item " to="/products">
              <img
                className="img-fluid max-w-h-cate-in-home-2-3"
                src={randomCategory[2].img}
                alt=""
                style={{ objectFit: "cover", width: 413, height: 275 }}
              />
              <strong className="category-item-title text-secondary">
                {randomCategory[2].name}
              </strong>
            </Link>
          </div>
          <div className="col-md-4">
            <Link className="category-item " to="/products">
              <img
                className="img-fluid max-w-h-cate-in-home-1-4"
                src={randomCategory[3].img}
                alt=""
                style={{ objectFit: "cover", width: 413, height: 519 }}
              />
              <strong className="category-item-title text-secondary">
                {randomCategory[3].name}
              </strong>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesRandom;
