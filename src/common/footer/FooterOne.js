import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedin,
  FaInstagram,
  FaVimeoV,
  FaDribbble,
  FaBehance,
  FaEnvelopeOpen,
} from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {
  return (
    <footer className={`footer-area ${parentClass}`}>
      <div className="container">
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                  <h2 className="title">Trợ giúp</h2>
                  <p>Để lại thông tin của bạn</p>
                  <form>
                    <div className="input-group">
                      <span className="mail-icon">
                        <FaEnvelopeOpen />{" "}
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Nhập Email..."
                      />
                      <button className="subscribe-btn" type="submit">
                        Gửi
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Dịch vụ</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        {getServiceData.slice(0, 3).map((data, index) => (
                          <li key={index}>
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                `/service-details/${slugify(data.title)}`
                              }
                            >
                              {data.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Tài nguyên</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/blog-grid"}>
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Hỗ trợ</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/contact"}>
                            Liên hệ
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                            Chính sách
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/terms-use"}>
                            Điều khoản
                          </Link>
                        </li>{" "}
                        <div className="footer-top"></div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © {new Date().getFullYear()}. All rights reserved by{" "}
                  <a href="https://axilthemes.com/">Axilthemes</a>.
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/terms-use"}>
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
