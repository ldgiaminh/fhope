import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import CaseStudyProp from "../component/casestudy/CaseStudyProp";
import BannerThree from "../component/banner/BannerThree";
import BannerFour from "../component/banner/BannerFour";
import BannerBlog from "../component/banner/BannerBlog";
import BlogProp from "../common/blog/BlogProp";

const Blog = () => {
  return (
    <>
      <SEO title="Case Study" />
      {/* <ColorSwitcher /> */}
      <main className="main-wrapper">
        <HeaderOne />
        <BannerBlog />
        <div className="pt--250 pt_lg--200 pt_md--100 pt_sm--80 case-study-page-area">
          <div className="container">
            <BlogProp />
          </div>
        </div>
        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default Blog;
