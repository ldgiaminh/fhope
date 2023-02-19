import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ServicePropOne from "../component/service/ServicePropOne";
import AboutSix from "../component/about/AboutSix";
import CounterUpTwo from "../component/counterup/CounterUpTwo";

const BecomeBuyer = () => {
  return (
    <>
      <SEO title="Service Two" />

      {/* <ColorSwitcher /> */}
      <main className="main-wrapper">
        <HeaderOne />
        <BcrumbBannerOne
          title="Đóng góp tài liệu học tập"
          paragraph="Bên cạnh việc theo dõi và tải tài liệu từ 'F-HOPE', người dùng vẫn có thể kiếm tiền tại 'F-HOPE' thông qua ĐÓNG GÓP TÀI LIỆU.
                "
          styleClass=""
          mainThumb="/images/banner/buyer.png"
        />
        <AboutSix />

        {/* <CtaLayoutOne /> */}
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default BecomeBuyer;
