import React from "react";
import FormOne from "../contact/FormOne";
import Accordion from "react-bootstrap/Accordion";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";
import FormTwo from "../contact/FormTwo";
import FormBuyer from "../contact/FormBuyer";

const AboutSix = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us">
              <div className="section-heading heading-left">
                <span className="subtitle">Đóng góp tài liệu</span>
                <h3 className="title">
                  Lợi ích khi tham gia đóng góp tài liệu tại "F-HOPE"?
                </h3>
                <p>
                  Ngoài việc tải và mua tải tài liệu trên "F-HOPE", người dùng
                  có thể đóng góp tài liệu của mình với những lợi ích sau
                </p>
              </div>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaCompress /> Tăng thu nhập
                  </Accordion.Header>
                  <Accordion.Body>
                    Việc kiếm thêm thu nhập không còn là một trở ngại. Giờ đây,
                    khi đăng ký trở thành Seller, bạn có thể dễ dàng kiếm tiền
                    chỉ với việc chia sẻ các tài liệu thật bổ ích!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaCode /> Nhận thanh toán dễ dàng
                  </Accordion.Header>
                  <Accordion.Body>
                    FHope hỗ trợ người bán nhận thanh toán rất dễ dàng và nhanh
                    chóng. Thông qua các cổng thanh toán nổi tiếng và phổ biến ở
                    Việt Nam bằng Momo trong vòng 24h.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaGlobe /> Hỗ trợ tận tâm
                  </Accordion.Header>
                  <Accordion.Body>
                    FHope có đội ngũ hỗ trợ nhiệt tình và kịp thời cho người
                    dùng của mình. Nếu bạn cần bất kỳ sự trợ giúp nào, đội ngũ
                    hỗ trợ của FHope sẽ giúp bạn giải quyết nhanh nhất có thể
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-form-box shadow-box mb--30">
              <h3 className="title">
                Điền thông tin đăng kí đóng góp tài liệu{" "}
              </h3>
              <FormBuyer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSix;
