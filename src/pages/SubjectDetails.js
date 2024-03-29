import React from "react";
import { Link, useParams } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import { slugify } from "../utils";
import ProjectData from "../data/project/ProjectData.json";
import VideoOne from "../component/video/VideoOne";
import Accordion from "react-bootstrap/Accordion";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import WidgetCategory from "../component/blog/widget/WidgetCategory";
import BreadCrumbTwo from "../elements/breadcrumb/BreadCrumbTwo";
import WidgetMooc from "../component/blog/widget/WidgetMooc";
import HeaderTwo from "../common/header/HeaderTwo";
import HeaderLogin from "../common/header/HeaderLogin";
import Comment from "../component/blog/Comment";

const allProjectData = ProjectData;

const SubjectDetails = () => {
  const params = useParams();
  const projectSlug = params.slug;

  const getProjectData = allProjectData.filter(
    (data) => slugify(data.title) === projectSlug
  );
  const detailsProject = getProjectData[0];

  return (
    <>
      <SEO title="Project Details" />
      {/* <ColorSwitcher /> */}
      <main className="main-wrapper">
        <HeaderLogin />
        <BreadCrumbTwo
          title={detailsProject.title}
          page={detailsProject.title}
          subtitle={detailsProject.subtitle}
        />
        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="section-heading heading-left mb-0">
                  <span className="subtitle">
                    {detailsProject.category.map((cat, i) => (
                      <span key={i}>{cat}</span>
                    ))}
                  </span>
                  <h3 className="title">{detailsProject.title}</h3>
                </div>
                {detailsProject.body.map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }}></p>
                ))}
                {/* <Link to="#" className="axil-btn btn-fill-primary">
                  Get it Now
                </Link> */}
              </div>
              <div className="col-lg-6 offset-xl-1">
                <div className="why-choose-us">
                  <div className="section-heading heading-left">
                    <h3 className="title">Nguồn tài liệu tham khảo</h3>
                  </div>
                  <div className="widget widget-categories">
                    <WidgetMooc />
                  </div>
                </div>
              </div>
            </div>
            <Comment />
          </div>
        </section>
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default SubjectDetails;
