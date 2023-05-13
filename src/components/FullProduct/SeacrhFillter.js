import React from "react";
import { BiSearch } from "react-icons/bi";

const SeacrhFillter = ({ fetchState, cateFillterState }) => {
  const { categories } = fetchState;
  const { cateFillter, setcateFillter, query, setQuery } = cateFillterState;

  const handleChangeCategory = (category) => {
    setcateFillter(category.toLowerCase());
  };

  console.log(cateFillter);

  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <h5 className="text-uppercase mb-4">Categories</h5>

      <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
        <li
          className={` mb-2 py-2  ${
            cateFillter === "all" ? "pl-4 bg-dark" : "bg-white"
          }`}
          onClick={() => handleChangeCategory("all")}
        >
          <a
            className={`reset-anchor ${
              cateFillter === "all" ? "text-white " : "text-dark "
            }`}
            href="#!"
          >
            All products
          </a>
        </li>
        {categories.lenght === 0 ? (
          <li className="mb-2">
            <a className="reset-anchor text-dark" href="#!">
              Women's T-Shirts
            </a>
          </li>
        ) : (
          categories.map((category) => (
            <li
              key={category.name}
              className={` mb-2 py-2 ${
                cateFillter === category.name.toLowerCase()
                  ? "bg-dark pl-4 "
                  : "bg-white "
              }`}
              onClick={() => handleChangeCategory(category.name)}
            >
              <a
                className={`reset-anchor ${
                  cateFillter === category.name.toLowerCase()
                    ? "text-white "
                    : "text-dark "
                }`}
                href="#!"
              >
                {category.name}
              </a>
            </li>
          ))
        )}
      </ul>

      <h5 className="text-uppercase mb-4">Products name</h5>
      <div className="border p-2 w-100 d-flex align-items-center gap-2">
        <BiSearch size={20} color={"#757575"} />
        <input
          type="text"
          placeholder="Enter product name ..."
          className="border-0 "
          style={{ flex: 1, outline: "none" }}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
    </div>
  );
};

export default SeacrhFillter;
