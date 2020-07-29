import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import axios from "axios";



const Contact = () => {
    const initialContact = {
        name: "",
        email: "",
        message: "",
        nameError: "",
        emailError: "",
       
      }
    const initialTouched = {
        
            name: false,
            email: false,
            message: false,
          
    }
  const [contact, setContact] = useState(initialContact);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [touched, setTouched] = useState(initialTouched);

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
      .post("https://portfolio-be-prem.herokuapp.com/api/contacts", {name:contact.name, email:contact.email, message:contact.message})
      .then((res) => {
          console.log("api", "hello")
        
        setContact(initialContact)
        setTouched(initialTouched)
        setSuccess(true);
        
      })
        

      .catch((err) => {
          console.log("error", err)
        setFailure(true);
        
      });
      
  }

  useEffect(()=>{
    const timer = setTimeout(()=> setSuccess(false), 2000);
    return () => clearTimeout(timer)
  },[success])

  useEffect(()=>{
    const timer = setTimeout(()=> setFailure(false), 2000);
    return () => clearTimeout(timer)
  },[failure])

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
    setTouched({...touched, [e.target.name]: true})
  };
  const isEnabled = (
                    (touched["name"] && !contact["nameError"]) 
                    && (touched["email"] && !contact["emailError"])
                    && (touched["message"] && !contact["messageError"])
                    
                    )

    console.log("contact", contact)
    console.log("success", success)
        
  return (
    <section className="section-contact" id="section-contact">
      <div className="row">
        <div className="contact">
          <div className="contact-form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Contact</h2>
              </div>
              <div className="error error--showing">
                {contact["nameError"] && touched["name"]
                  ? <div>{contact.nameError}</div>
                  : ""}
              </div>
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
              <div className="error error--showing">
                {contact["emailError"] && touched["email"]
                  ? <div>{contact.emailError}</div>
                  : ""}
              </div>
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
              <div className="error error--showing">
                {contact["messageError"] && touched["message"]
                  ? <div>{contact.messageError}</div>
                  : ""}
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  className="form-input"
                  onChange={handleChange}
                  onFocus={validateMessage}
                  onBlur={handleBlur}
                  value={contact.message}
                ></textarea>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
              </div>

              <div className="form-group">
                <button
                  className="btn btn--black u-margin-bottom-medium"
                  onClick={handleSubmit}
                  disabled={!isEnabled}
                >
                  Send
                </button>
                
                
               
                
                
              </div>
              
              <div className={`flash-message {success ? "flash-message--showing"}`}>
                  { success ? 
                  <div className="flash-message--success flash-message--message">
                      Thanks for reaching out. I will be in touch shortly!
                  </div> : ''
                  
                    }
                </div>
                   
             
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
