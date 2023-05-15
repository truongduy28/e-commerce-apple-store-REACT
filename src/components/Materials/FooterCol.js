import React from "react";

const FooterCol = ({ footerItem }) => {
  return (
    <div className="col-md-4 mb-3 mb-md-0">
      <h6 className="text-uppercase mb-3">{footerItem.topic}</h6>
      <ul className="list-unstyled mb-0">
        {footerItem.children.map((child, index) => (
          <li key={index}>
            <a className="footer-link" href="#!">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCol;
