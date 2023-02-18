import React from "react";
import DownloadLink from "react-download-link";
import File from "../../data/assignment/assignment.txt";
import { Link } from "react-router-dom";

const BlogGridThree = ({ data, colSize }) => {
  return (
    <>
      {data.map((blog) => (
        <div className={colSize} key={blog.id}>
          <div className="blog-grid blog-grid-2">
            <div className="post-thumbnail">
              <Link to={process.env.PUBLIC_URL + `/blog-details/${blog.id}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/${blog.thumb}`}
                  alt="Blog"
                />
              </Link>
            </div>
            <div className="author">
              <div className="info">
                <h6 className="author-name">{blog.author_name}</h6>
                <ul className="blog-meta list-unstyled">
                  <li>{blog.post_date}</li>
                  <li>{blog.read_time}</li>
                </ul>
              </div>
            </div>
            <h5 className="title">
              <Link to={process.env.PUBLIC_URL + `/blog-details/${blog.id}`}>
                {blog.title}
              </Link>
            </h5>
            <p>{blog.excerpt}</p>
            <DownloadLink
              className="axil-btn btn-borderd"
              style={{ color: "text-primary" }}
              label="Tải về"
              filename="assignment.txt"
              exportFile={() => File}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogGridThree;