import React from "react";
import { Link } from "react-router-dom";
import SplashFooter from "../common/footer/SplashFooter";
import SplashHeader from "../common/header/SplashHeader";
import SEO from "../common/SEO";
import SplashBanner from "../component/banner/SplashBanner";
import SplashCta from "../component/cta/SplashCta";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SplashData from "../data/splash/SplashData.json";
import { slugify } from "../utils";
import { FaAngleRight } from "react-icons/fa";
import BannerThree from "../component/banner/BannerThree";
import BannerOne from "../component/banner/BannerOne";
import ProjectOne from "../component/project/ProjectOne";
import ProjectFive from "../component/project/ProjectFive";
import ServicePropOne from "../component/service/ServicePropOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import BlogOne from "../component/blog/BlogOne";
import FooterOne from "../common/footer/FooterOne";

const DemoData = SplashData[0];
const FeatureData = SplashData[1];

const Splash = () => {
  return (
    <>
      <SEO title="Digital Creative Agency, Corporate and Portfolio React JS Template" />
      {/* <ColorSwitcher /> */}
      <main className="main-wrapper">
        <SplashHeader />
        <BannerOne />

        <div className="section section-padding-2 bg-color-purple">
          <div className="container">
            <SectionTitle
              subtitle="Lợi ích chúng tôi mang lại"
              title="Chúng tôi có thể mang lại cho bạn những giá trị,"
              description=""
              textAlignment="heading-light-left"
              textColor=""
            />
            <div className="row">
              <ServicePropOne
                colSize="col-xl-4 col-md-6"
                serviceStyle=""
                itemShow="3"
              />
            </div>
          </div>
          <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-9.png"}
                alt="Circle"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"}
                alt="Circle"
              />
            </li>
            <li className="shape shape-3">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"}
                alt="Circle"
              />
            </li>
          </ul>
        </div>

        <ProjectOne
          colSize="col-xl-3 col-lg-4 col-md-6"
          itemShow="4"
          columnGap="row-15"
          parentClass="project-column-4"
        />

        <BlogOne />
        <SplashCta />
        <FooterOne />
      </main>
    </>
  );
};

export default Splash;
