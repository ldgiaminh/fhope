import React from "react";
import Logo from "../../elements/logo/Logo";
import StickyHeader from "./StickyHeader";

const SplashHeader = () => {
  const sticky = StickyHeader(100);

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
                    <a href="/about-us">Về chúng tôi</a>
                  </li>
                </ul>
              </nav>
              {/* End Mainmanu Nav */}
            </div>
            <div className="header-action">
              <ul className="list-unstyled">
                <li className="buy-btn">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://themeforest.net/cart/configure_before_adding/37917149"
                    className="axil-btn btn-fill-primary"
                  >
                    Đăng Nhập
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SplashHeader;
