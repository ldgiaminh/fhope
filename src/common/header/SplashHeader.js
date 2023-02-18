import React, { useState } from "react";
import Logo from "../../elements/logo/Logo";
import MobileMenu from "./MobileMenu";
import OffcanvasLogin from "./OffcanvasLogin";
import OffcanvasMenu from "./OffcanvasMenu";
import StickyHeader from "./StickyHeader";

const SplashHeader = () => {
  const sticky = StickyHeader(100);

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const OffcanvasHandleClose = () => setShowOffcanvas(false);
  const OffcanvasHandleShow = () => setShowOffcanvas(true);

  const MobileMenuHandler = () => {
    document.querySelector(".mobilemenu-popup").classList.toggle("show");
    document.querySelector("body").classList.toggle("mobilemenu-show");

    var elements = document.querySelectorAll(
      ".mobilemenu-popup .menu-item-has-children > a"
    );

    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".axil-submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
  };

  return (
    <header className="header axil-header header-style-1 splash-header-style">
      <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <Logo
                limage="/images/logo.svg"
                dimage="/images/logo.svg"
                simage="/images/logo-3.svg"
              />
            </div>
            <div className="header-main-nav">
              {/* Start Mainmanu Nav */}
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li>
                    <a href="#splash-demo">Tài liệu</a>
                  </li>
                  <li>
                    <a href="/blog-grid">Bài viết</a>
                  </li>
                  <li>
                    <a href="/contact">Về chúng tôi</a>
                  </li>
                </ul>
              </nav>
              {/* End Mainmanu Nav */}
            </div>
            <div className="header-action">
              <ul className="list-unstyled">
                <li className="buy-btn">
                  <button
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={OffcanvasHandleShow}
                    className="axil-btn btn-fill-primary"
                  >
                    Đăng Nhập
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <OffcanvasLogin
        offcanvasShow={showOffcanvas}
        offcanvasHide={OffcanvasHandleClose}
      />
      <MobileMenu MobileHandler={MobileMenuHandler} />
    </header>
  );
};

export default SplashHeader;
