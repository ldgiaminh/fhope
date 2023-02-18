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

const FormLogin = () => {
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
        <label>Tên đăng nhập</label>
        <input
          type="text"
          className="form-control"
          name="contact-name"
          placeholder="Gia Minh"
          required
        />
      </div>
      <div className="form-group">
        <label>Mật khẩu</label>
        <input
          type="email"
          className="form-control"
          name="contact-email"
          placeholder="123456"
          required
        />
      </div>
      <div className="form-group">
        <Link
          to="/subject-list"
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          name="submit-btn"
        >
          Đăng nhập
        </Link>
      </div>
      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
};

export default FormLogin;
