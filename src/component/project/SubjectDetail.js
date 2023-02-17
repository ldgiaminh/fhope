import React, { useState, useEffect } from "react";
import ProjectPropTwo from "./itemProp/ProjectPropTwo";

import SectionTitleSubject from "../../elements/section-title/SectionTitleSubject";
import ProjectData from "../../data/project/ProjectData.json";
import Comment from "../blog/Comment";

const filters = [
  {
    id: 1,
    label: "Phố biến",
  },
  {
    id: 2,
    label: "Xem nhiều nhất",
  },
  {
    id: 3,
    label: "Gợi ý",
  },
];

const AllData = ProjectData;

const SubjectDetail = ({ parentClass, colSize, itemShow, columnGap }) => {
  const [getAllItems] = useState(AllData);
  const [visiableProject] = useState(itemShow ? itemShow : 6);

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id <= visiableProject));
  }, []);

  return (
    <>
      <div
        className={`section section-padding-2 bg-color-purple ${
          parentClass ? parentClass : ""
        }`}
      >
        <div className="container">
          <SectionTitleSubject
            subtitle="Chúng tôi đã chuẩn bị sẵn cho bạn những tài liệu mà bạn cần tìm."
            title="Mục tài liệu môn học"
            textAlignment="heading-left mb--40"
            textColor="text-white"
          />
          <div className={`row ${columnGap ? columnGap : "row-35"}`}>
            {visibleItems.map((data) => (
              <div className={colSize ? colSize : "col-md-6"} key={data.id}>
                <ProjectPropTwo projectStyle="" portfolio={data} />
              </div>
            ))}
          </div>
        </div>
        <ul className="shape-group-7 list-unstyled">
          <li className="shape shape-1">
            <img
              src={process.env.PUBLIC_URL + "/images/others/circle-2.png"}
              alt="circle"
            />
          </li>
          <li className="shape shape-2">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"}
              alt="Line"
            />
          </li>
          <li className="shape shape-3">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"}
              alt="Line"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default SubjectDetail;
