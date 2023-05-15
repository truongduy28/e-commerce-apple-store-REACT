import React from "react";
import { TAB_FILTER_ORDER } from "./../../data/index";

const TabFilter = ({ filterState }) => {
  const { filterTab, setFilterTab } = filterState;

  return (
    <div className="d-flex w-100 border border-dark">
      {TAB_FILTER_ORDER.map((t) => (
        <div
          onClick={() => setFilterTab(t.vn)}
          style={{ flex: 1, cursor: "pointer" }}
          className={`d-flex justify-content-center align-items-center ${
            t.vn === filterTab ? "bg-dark " : "bg-white"
          }  `}
        >
          <p
            className={`py-2 m-0 text-uppercase text-center   ${
              t.vn === filterTab ? "text-white " : "text-dark"
            } `}
          >
            {t.en}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TabFilter;
