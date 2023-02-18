import React, { useState, useEffect } from "react";
import ProjectPropOne from "./itemProp/ProjectPropOne";

import SectionTitle from "../../elements/section-title/SectionTitle";
import ProjectData from "../../data/project/ProjectData.json";
const filters = [
  {
    id: 1,
    label: "Kỳ 1",
  },
  {
    id: 2,
    label: "Kỳ 2",
  },
  {
    id: 3,
    label: "Kỳ 3",
  },
  {
    id: 4,
    label: "Kỳ 4",
  },
  {
    id: 5,
    label: "Kỳ 5",
  },
  {
    id: 6,
    label: "Kỳ 6",
  },
  {
    id: 7,
    label: "Kỳ 7",
  },
  {
    id: 8,
    label: "Kỳ 8",
  },
  {
    id: 9,
    label: "Kỳ 9",
  },
];

const AllData = ProjectData;

const ProjectOne = ({ parentClass, colSize, itemShow, columnGap }) => {
  const [getAllItems] = useState(AllData);
  const [visiableProject] = useState(itemShow ? itemShow : 6);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setActiveFilter(filters[0].label);
    setVisibleItems(
      getAllItems.filter(
        (item) => item.category == "Kỳ 1" && item.id <= visiableProject
      )
    );
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let target = e.target.textContent;

    setActiveFilter(target);

    let tempData = [];
    // if (target === filters[0].label) {
    //   tempData = getAllItems.filter((data) => data.id <= visiableProject);
    // } else {
    //   for (let i = 0; i < getAllItems.length; i++) {
    //     const element = getAllItems[i];
    //     let categories = element["category"];

    //     if (categories.includes(target)) {
    //       tempData.push(element);
    //     }
    //   }
    // }
    for (let i = 0; i < getAllItems.length; i++) {
      const element = getAllItems[i];
      let categories = element["category"];

      if (categories.includes(target)) {
        tempData.push(element);
      }
    }

    setVisibleItems(tempData);
  };

  return (
    <>
      <div
        className={`section section-padding-2 ${
          parentClass ? parentClass : ""
        }`}
      >
        <div className="container">
          <SectionTitle
            subtitle="Chúng tôi đã chuẩn bị sẵn cho bạn những tài liệu mà bạn cần tìm."
            title="Mục tài liệu môn học"
            textAlignment="heading-left mb--40"
            textColor=""
          />
          <div className="isotope-button isotope-subject-btn">
            {filters.map((filter) => (
              <button
                onClick={handleChange}
                className={filter.label === activeFilter ? "is-checked" : " "}
                key={filter.id}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className={`row ${columnGap ? columnGap : "row-35"}`}>
            {visibleItems.map((data) => (
              <div className={colSize ? colSize : "col-md-6"} key={data.id}>
                <ProjectPropOne projectStyle="" portfolio={data} />
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

export default ProjectOne;
