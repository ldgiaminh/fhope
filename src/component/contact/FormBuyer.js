import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your Message has been successfully sent.
    </Alert>
  );
};

const FormTwo = () => {
  const form = useRef();

  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yj5dgzp",
        "template_hfduayo",
        form.current,
        "WLENsTkBytC0yvItS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
      <div className="form-group">
        <label>CMND/CCCD</label>
        <input
          value = "0123012300123"
          type="text"
          className="form-control"
          name="contact-name"
          required
        />
      </div>
      <div className="form-group">
        <label>Số điện thoại</label>
        <input
          value = "0774812914"
          type="tel"
          className="form-control"
          name="contact-phone"
          required
        />
      </div>
      <div className="form-group mb--40">
        <label>Cho chúng tôi biết thêm về bạn?</label>
        <textarea
          value = "Tôi tên là A"
          className="form-control"
          name="contact-message"
          rows="4"
        ></textarea>
      </div>

      <div className="form-group">
        <Link
          to={"/subject-list-seller"}
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          name="submit-btn"
        >
          Gữi
        </Link>
      </div>
      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
};

export default FormTwo;
