import React from "react";

const HeaderCart = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container p-0">
        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="h2 text-uppercase mb-0">Cart</h1>
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
                  Cart
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderCart;
