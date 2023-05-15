import React, { useState, useEffect } from "react";
import SeacrhFillter from "../components/FullProduct/SeacrhFillter";
import ProductsContainer from "../components/FullProduct/ProductsContainer";
import axios from "axios";
import { API } from "../ENV_KEY";
import useDebounce from "./../hooks/useDebounce";
import { Header, Footer } from "../components/Layout";

function FullProductPage() {
  const [fullProductsInit, setFullProductsInit] = useState([]);
  const [fullProducts, setFullProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [cateFillter, setcateFillter] = useState("all");
  const [query, setQuery] = useState("");
  const debounceQueryName = useDebounce(query, 1500);

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
    let productCategoryFilterArr = [];
    let productNameFillterArr = [];

    if (cateFillter === "all") {
      productCategoryFilterArr = fullProductsInit;
    } else {
      productCategoryFilterArr = fullProductsInit.filter(
        (product) => product.categoryId.name.toLowerCase() === cateFillter
      );
    }

    setFullProducts(productCategoryFilterArr);

    if (!debounceQueryName) {
      productNameFillterArr = productCategoryFilterArr;
    } else {
      productNameFillterArr = productCategoryFilterArr.filter((product) =>
        product.name.toLowerCase().includes(debounceQueryName.toLowerCase())
      );
    }

    setFullProducts(productNameFillterArr);
  }, [cateFillter, debounceQueryName]);

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
                      <a className="text-dark" href="#">
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
                cateFillterState={{
                  cateFillter,
                  setcateFillter,
                  query,
                  setQuery,
                }}
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
