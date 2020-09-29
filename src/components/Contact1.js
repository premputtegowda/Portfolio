import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";


import axios from "axios";



const Contact1 = () => {

    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
    }
    );
    

  
        
  return (
    <section className="section-contact" id="section-contact">
      <div className="row">
        <div className="contact">
          <div className="contact-form">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
