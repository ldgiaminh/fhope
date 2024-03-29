import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderBuyer from "../common/header/HeaderBuyer";
import HeaderLogin from "../common/header/HeaderLogin";
import HeaderTwo from "../common/header/HeaderTwo";
import SEO from "../common/SEO";
import BannerTwo from "../component/banner/BannerTwo";
import BlogOne from "../component/blog/BlogOne";
import BrandOne from "../component/brand/BrandOne";
import CounterUpOne from "../component/counterup/CounterUpOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import SubjectList from "../component/project/SubjectList";
import ServicePropOne from "../component/service/ServicePropOne";
import TestimonialOne from "../component/testimonial/TestimonialOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";

const SubjectPageBuyer = () => {
  return (
    <>
      <SEO title="Creative Agency" />
      {/* <ColorSwitcher /> */}
      <main className="main-wrapper">
        <HeaderBuyer />
        {/* <BannerTwo /> */}

        <SubjectList
          colSize="col-xl-3 col-lg-4 col-md-6"
          itemShow="8"
          columnGap="row-15"
          parentClass="project-column-4"
        />
        {/* <CounterUpOne />
        <TestimonialOne />
        <BrandOne /> */}
        <BlogOne />
        {/* <CtaLayoutOne /> */}
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default SubjectPageBuyer;
