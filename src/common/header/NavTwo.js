import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>Tài liệu</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/blog-grid"}>Bài viết</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Về chúng tôi</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contribution"}>
            Đóng góp tài liệu
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
