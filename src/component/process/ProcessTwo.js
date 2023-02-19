import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import QRData from "../../data/process/QRData.json";
import DownloadLink from "react-download-link";
import File from "../../data/assignment/assignment.txt";
import Tilty from "react-tilty";

const getProcesstData = QRData;

const ProcessTwo = () => {
  return (
    <div className="section section-padding bg-color-light pb--70">
      <div className="container">
        {getProcesstData.map((data) => (
          <div
            key={data.id}
            className={`process-work ${
              data.id % 2 === 0 ? "content-reverse" : ""
            }`}
          >
            <Tilty perspective={2000}>
              <div className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + data.thumb}
                  alt="Thumbnail"
                />
              </div>
            </Tilty>
            <div className="content">
              <span className="subtitle">{data.subtitle}</span>
              <h3 className="title">{data.title}</h3>
              <p>{data.paragraph}</p>
              <DownloadLink
                className="axil-btn btn-fill-primary"
                style={{ color: "text-primary", marginTop: "40px" }}
                label="Tải về"
                filename="assignment.txt"
                exportFile={() => File}
              />
            </div>
          </div>
        ))}
      </div>
      <ul className="shape-group-17 list-unstyled">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt="Line"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt="Line"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt="Line"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt="Line"
          />
        </li>
      </ul>
    </div>
  );
};

export default ProcessTwo;
