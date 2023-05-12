import React, { useState } from "react";
import Product from "../components/Layout/ProductRandom";
import SeacrhFillter from "../components/FullProduct/SeacrhFillter";
import ProductsContainer from "../components/FullProduct/ProductsContainer";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../ENV_KEY";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function FullProductPage() {
  const [fullProductsInit, setFullProductsInit] = useState([]);
  const [fullProducts, setFullProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [cateFillter, setcateFillter] = useState("all");

  useEffect(() => {
    const getProductsData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${API}/products/get-all-product`);
        setFullProducts(data.products);
        setFullProductsInit(data.products);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };
    const getCategoriesData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${API}/categorys/`);
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };
    getCategoriesData();
    getProductsData();
  }, []);

  useEffect(() => {
    if (fullProductsInit.length === 0) return;
    // console.log(fullProductsInit);
    if (cateFillter === "all") {
      setFullProducts(fullProductsInit);
    } else {
      const filledProducts = fullProductsInit.filter(
        (product) => product.categoryId.name.toLowerCase() === cateFillter
      );
      setFullProducts(filledProducts);
    }
  }, [cateFillter]);

  return (
    <div className="page-holder">
      <Header />
      <div className="container p-0">
        <section className="py-5 bg-light">
          <div className="container p-0">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Shop</h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li className="breadcrumb-item">
                      <a className="text-dark" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              {/* SHOP SIDEBAR*/}
              <SeacrhFillter
                fetchState={{ categories }}
                cateFillterState={{ cateFillter, setcateFillter }}
              />
              {/* SHOP LISTING*/}
              <ProductsContainer fetchState={{ isLoading, fullProducts }} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default FullProductPage;
