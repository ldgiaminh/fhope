import React, { useState } from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import FormBuyer from "../component/contact/FormBuyer";
import SectionTitle from "../elements/section-title/SectionTitle";
import ContactLocation from "../component/contact/ContactLocation";
import FormContribu from "../component/contact/FormContribu";
import ProjectOne from "../component/project/ProjectOne";

const Contribution = () => {
  return (
    <>
      <SEO title="Blog Grid" />
      {/* <ColorSwitcher /> */}
      <main className="main-wrapper">
        <HeaderOne />
        <BreadCrumbOne title="Đóng góp tài liệu" page="Đóng góp tài liệu" />

        <div className="section section-padding">
          <div className="container">
            {/* <div className="col-xl-5 col-lg-6">
                <div className="contact-form-box shadow-box mb--30">
                  <h3 className="title">Get a free Abstrak quote now</h3>
                  <FormTwo />
                </div>
              </div> */}
            {/* <div className="col-xl-5 col-lg-6 offset-xl-1">
                <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                  <h4 className="title">Phone</h4>
                  <p>
                    Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm
                  </p>
                  <h4 className="phone-number">
                    <a href="tel:1234567890">(123) 456 7890</a>
                  </h4>
                </div>
                <div className="contact-info mb--30">
                  <h4 className="title">Email</h4>
                  <p>
                    Our support team will get back to in 48-h during standard
                    business hours.
                  </p>
                  <h4 className="phone-number">
                    <a href="mailto:info@example.com">info@example.com</a>
                  </h4>
                </div>
              </div> */}
            <div className="col-lg-12">
              <div className="contact-form-box shadow-box mb--30">
                <h3 className="title">Tải tài liệu lên tại đây</h3>
                <FormContribu />
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled shape-group-12">
          {/* <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"}
                alt="Bubble"
              />
            </li> */}
          <li className="shape shape-2">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"}
              alt="Bubble"
            />
          </li>
          <li className="shape shape-3">
            <img
              src={process.env.PUBLIC_URL + "/images/others/circle-3.png"}
              alt="Circle"
            />
          </li>
        </ul>

        <ProjectOne
          colSize="col-xl-3 col-lg-4 col-md-6"
          itemShow="8"
          columnGap="row-15"
          parentClass="project-column-4"
        />
        {/* <div className="section section-padding bg-color-dark overflow-hidden">
            <div className="container">
              <SectionTitle
                subtitle="Find Us"
                title="Our office"
                description=""
                textAlignment="heading-light-left"
                textColor=""
              />
              <div className="row">
                <ContactLocation />
              </div>
            </div>
            <ul className="shape-group-11 list-unstyled">
              <li className="shape shape-1">
                <img
                  src={process.env.PUBLIC_URL + "/images/others/line-6.png"}
                  alt="line"
                />
              </li>
              <li className="shape shape-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/others/circle-3.png"}
                  alt="line"
                />
              </li>
            </ul>
          </div> */}

        <FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" />
      </main>
    </>
  );
};

export default Contribution;
