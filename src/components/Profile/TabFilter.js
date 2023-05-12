import React from "react";

const TabFilter = ({ filterState }) => {
  const { filterTab, setFilterTab } = filterState;
  const TAB = [
    { en: "all", vn: "all" },
    { en: "Waiting comfirm", vn: "Chờ xác nhận" },
    { en: "Comfirmed", vn: "Đã xác nhận" },
    { en: "Shipping", vn: "Đang giao hàng" },
    { en: "Done", vn: "Đã giao hàng" },
    { en: "Cancel", vn: "Đã hủy" },
  ];

  return (
    <div className="d-flex w-100 border border-dark">
      {TAB.map((t) => (
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
