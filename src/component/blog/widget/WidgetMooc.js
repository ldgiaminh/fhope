import React from "react";
import { Link } from "react-router-dom";
import { flatDeep, slugify, containsObject } from "../../../utils";
import MoocData from "../../../data/project/MoocData.json";

const WidgetMooc = () => {
  const cats = MoocData.map((data) => {
    return data.category;
  });

  let singleCatArray = flatDeep(cats);
  let categories = [];
  singleCatArray.forEach((cat) => {
    const obj = {
      title: cat.trim(),
      slug: slugify(cat),
      count: 1,
    };
    const objIndex = containsObject(obj, categories);
    if (objIndex !== -1) {
      const prevCount = categories[objIndex].count;
      categories[objIndex] = {
        title: cat.trim(),
        slug: slugify(cat),
        count: prevCount + 1,
      };
    } else {
      categories.push(obj);
    }
  });

  return (
    <ul className="category-list list-unstyled">
      {categories.map((data) => (
        <li key={data.slug}>
          <Link to={process.env.PUBLIC_URL + `/subject-category/${data.slug}`}>
            {data.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default WidgetMooc;
