import React from "react";
import { Link, useParams } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerTwo from "../elements/breadcrumb/BcrumbBannerTwo";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import { slugify } from "../utils";
import ProjectData from "../data/project/ProjectData.json";
import VideoOne from "../component/video/VideoOne";
import Accordion from "react-bootstrap/Accordion";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import HeaderDetail from "../common/header/HeaderDetail";
import SubjectDetail from "../component/project/SubjectDetail";
import Comment from "../component/blog/Comment";

const allProjectData = ProjectData;

const ProjectDetails = () => {
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
        <HeaderDetail />
        {/* <BcrumbBannerTwo
          title={detailsProject.title}
          paragraph={detailsProject.excerpt}
          mainThumb={detailsProject.image}
        /> */}
        <SubjectDetail
          colSize="col-xl-3 col-lg-4 col-md-6"
          itemShow="4"
          columnGap="row-15"
          parentClass="project-column-4"
        />
        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Comment />
              </div>
            </div>
          </div>
        </section>
        {/* <VideoOne /> */}
        <div className="row row-40">
          <div className="col-lg-8"></div>
        </div>
        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default ProjectDetails;
