import React from "react";
import { FaReply } from "react-icons/fa";

const Comment = () => {
  return (
    <>
      <div className="blog-comment">
        <h3 className="section-title">Bình Luận:</h3>
        <div className="comment-list">
          <div className="comment">
            <div className="thumbnail">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/author-1.png"}
                alt="Blog Comment"
              />
            </div>
            <div className="content">
              <div className="heading">
                <h5 className="title">Vương Ngọc Khánh (K15 - HCM) </h5>
                <div className="comment-date">
                  <p>14 thg 02, 2023</p>
                  <button className="reply-btn">
                    <FaReply />
                  </button>
                </div>
              </div>
              <p>Tài liệu thật là đầy đủ và rất hữu ích với mình</p>
            </div>
          </div>
          <div className="comment comment-reply">
            <div className="thumbnail">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/author-2.png"}
                alt="Blog Comment"
              />
            </div>
            <div className="content">
              <div className="heading">
                <h5 className="title">Tô Hoàng Liêm (K15 - HCM)</h5>
                <div className="comment-date">
                  <p>16 thg 02, 2023</p>
                  <button className="reply-btn">
                    <FaReply />
                  </button>
                </div>
              </div>
              <p>Mình cũng vậy, đúng cái mình cần tìm nhaa</p>
            </div>
          </div>
          <div className="comment">
            <div className="thumbnail">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/author-3.png"}
                alt="Blog Comment"
              />
            </div>
            <div className="content">
              <div className="heading">
                <h5 className="title">Mai Trung Hậu (K15 - HCM)</h5>
                <div className="comment-date">
                  <p>19 thg 02, 2023</p>
                  <button className="reply-btn">
                    <FaReply />
                  </button>
                </div>
              </div>
              <p>Cám ơn bạn nhé, tài liệu này đã giúp mình được 8 điểm</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="blog-comment-form">
            <h3 className="title">Leave a comment:</h3>
            <form>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" placeholder="John Smith" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="name" placeholder="example@mail.com" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="tel" className="form-control" name="Phone" placeholder="+123456789" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Website</label>
                            <input type="text" className="form-control" name="website" placeholder="www.example.com" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group mb--30">
                            <label>How can we help you?</label>
                            <textarea name="message" id="message" className="form-control textarea" cols="30" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="form-group">
                            <button type="submit" className="axil-btn btn-fill-primary btn-fluid" name="submit-btn">Submit Now</button>
                        </div>
                    </div>
                </div>
            </form>
        </div> */}
    </>
  );
};

export default Comment;
