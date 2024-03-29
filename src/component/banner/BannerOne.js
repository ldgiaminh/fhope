import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <div className="banner banner-style-1">
      <div className="container">
        <div className="row align-items-end align-items-xl-start">
          <div className="col-lg-6">
            <div className="banner-content">
              <AnimationOnScroll
                animateIn="fadeInUp"
                animateOnce={true}
                delay={100}
              >
                <h1 className="title">CHÀO MỪNG ĐẾN VỚI "F-HOPE"</h1>
                <span className="subtitle">
                  Chúng tôi mong muốn mang đến cho các bạn sinh viên của Đại Học
                  FPT. Một kho tài liệu uy tín, được sự tín nhiệm của thầy cô,
                  nhà trường. Nhằm giúp nâng cao chất lượng học tập của toàn thể
                  sinh viên.
                </span>
                <Link
                  to={process.env.PUBLIC_URL + "/contact"}
                  className="axil-btn btn-fill-primary btn-large"
                >
                  Tải tài liệu
                </Link>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <AnimationOnScroll
                animateIn="zoomIn"
                duration={2}
                delay={300}
                animateOnce={true}
              >
                <div className="large-thumb">
                  <img
                    src={process.env.PUBLIC_URL + "/images/banner/window.png"}
                    alt="Laptop"
                  />
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="slideInRight"
                duration={2}
                delay={300}
                animateOnce={true}
              >
                <div className="large-thumb-2">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/banner/laptop-poses.png"
                    }
                    alt="Laptop"
                  />
                </div>
              </AnimationOnScroll>
              <ul className="list-unstyled shape-group">
                <li className="shape shape-1">
                  <AnimationOnScroll
                    animateIn="slideInLeft"
                    duration={1}
                    delay={800}
                    animateOnce={true}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/banner/chat-group.png"
                      }
                      alt="chat"
                    />
                  </AnimationOnScroll>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-21">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-36.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-46.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-47.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-45.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-47.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-7">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"}
            alt="Bubble"
          />
        </li>
      </ul>
    </div>
  );
};

export default BannerOne;
