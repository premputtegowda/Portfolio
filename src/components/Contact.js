import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: "",
  });
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    validateName();
  }, [contact.name]);
  useEffect(() => {
    validateEmail();
  }, [contact.email]);
  useEffect(() => {
    validateMessage();
  }, [contact.message]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://portfolio-be-prem.herokuapp.com/api/contacts", contact)
      .then((res) => {
        setSuccess(true);
        setTimeout(setSuccess(true), 5000);
      })
      .catch((err) => {
        setFailure(true);
        setTimeout(setSuccess(true), 5000);
      });
  }

  function validateName() {
    if (contact.name.length === 0) {
      setContact({ ...contact, nameError: "Name is required" });
    } else {
      setContact({ ...contact, nameError: "" });
    }
  }
  function validateMessage() {
    if (contact.message.length === 0) {
      setContact({ ...contact, messageError: "Message is required" });
    } else {
      setContact({ ...contact, messageError: "" });
    }
  }

  function validateEmail() {
    if (contact.email.length === 0) {
      setContact({ ...contact, emailError: "Email is required" });
    } else if (
      contact.email.length > 0 &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        contact.email.toLowerCase()
      )
    ) {
      setContact({ ...contact, emailError: "Invalid email" });
    } else {
      setContact({ ...contact, emailError: "" });
    }
  }

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-contact" id="section-contact">
      <div className="row">
        <div className="contact">
          <div className="contact-form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Contact</h2>
              </div>
              <p className="error">
                {contact["nameError"] && touched["name"]
                  ? contact.nameError
                  : ""}
              </p>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="form-input"
                  onFocus={validateName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={contact.name}
                />
                <label htmlFor="name" className="form-label">
                  Name
                </label>
              </div>
              <p className="error">
                {contact["emailError"] && touched["email"]
                  ? contact.emailError
                  : ""}
              </p>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-input"
                  onChange={handleChange}
                  onFocus={validateEmail}
                  onBlur={handleBlur}
                  value={contact.email}
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </div>

              <p className="error">
                {contact["messageError"] && touched["message"]
                  ? contact.messageError
                  : ""}
              </p>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  className="form-input"
                  onChange={handleChange}
                  onFocus={validateMessage}
                  onBlur={handleBlur}
                ></textarea>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
              </div>

              <div className="form-group">
                <button
                  className="btn btn--black u-margin-bottom-medium"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
              {console.log("success", success)}
              {console.log("contact", contact)}
              {success ? <div> hello </div> : ""}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
