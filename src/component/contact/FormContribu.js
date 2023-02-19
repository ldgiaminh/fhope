import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
import { Dropzone, FileItem, FullScreenPreview } from "@dropzone-ui/react";

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your Message has been successfully sent.
    </Alert>
  );
};

const FormContribu = () => {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const handleClean = (files) => {
    console.log("list cleaned", files);
  };
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
        <div className="row">
          <div className="col-md-6">
            <label>Chuyên ngành</label>
            <select
              className="form-control"
              name="majors"
              required
              //onChange={this.handleInputChange}
            >
              <option selected>Chọn chuyên ngành</option>
              <option value="1">city 1</option>
              <option value="2">city 2</option>
              <option value="3">city 3</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Kỳ học</label>
            <input
              type="text"
              className="form-control"
              name="contact-name"
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-md-6">
            <label>Mã môn</label>
            <input
              type="text"
              className="form-control"
              name="contact-name"
              required
            />
          </div>
          <div className="col-md-6">
            <label>Loại tài liêu</label>
            <input
              type="text"
              className="form-control"
              name="contact-name"
              required
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row">
          <label>Đăng tài liệu</label>
          <Dropzone
            style={{
              minWidth: "550px",
              marginBottom: "40px",
            }}
            //view={"list"}
            onChange={updateFiles}
            minHeight="205px"
            onClean={handleClean}
            value={files}
            maxFiles={5}
            //header={false}
            // footer={false}
            maxFileSize={2998000}
            label="Kéo, thả hoặc bấm vào để tải tài liệu"
            //label="Suleta tus archivos aquí"

            //uploadingMessage={"Uploading..."}
            url="https://my-awsome-server/upload-my-file"
            //of course this url doens´t work, is only to make upload button visible
            uploadOnDrop
            //clickable={false}
            fakeUploading
            //localization={"FR-fr"}
            disableScroll
          >
            {files.length > 0 &&
              files.map((file) => (
                <FileItem
                  {...file}
                  key={file.id}
                  onDelete={onDelete}
                  onSee={handleSee}
                  //localization={"ES-es"}
                  resultOnTooltip
                  preview
                  info
                  hd
                />
              ))}
          </Dropzone>
          <FullScreenPreview
            imgSource={imageSrc}
            openImage={imageSrc}
            onClose={(e) => handleSee(undefined)}
          />
        </div>
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          name="submit-btn"
        >
          Gữi
        </button>
      </div>
      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
};

export default FormContribu;