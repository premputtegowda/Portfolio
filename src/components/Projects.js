import React from 'react';
import { GiRegeneration } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { GiTicket } from "react-icons/gi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";



// import data from "../data/data"

function Projects () {
   
    return (
    <section className='section-projects' id='section-projects'>
        <div className="row">
            <div className="col-1-of-4">
                <div className="project-box">
                <i className="project-box__icon"> <FaHtml5 /> </i>
                <h3 className="heading-tertiary">
                        HTML5
                    </h3>
                    
                    {/* <p className="project-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorem cumque velit, rem dolor vitae molestiae placeat ut harum rerum cupiditate laboriosam asperiores inventore, accusantium recusandae temporibus explicabo officia doloribus.
                    </p> */}
                </div>
            </div>
            <div className="col-1-of-4">
                
                <div className="project-box">
                <i className="project-box__icon"> <FaCss3 /></i>
                    <h3 className="heading-tertiary">
                        CSS3
                    </h3>
                    <p className="project-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorem cumque velit, rem dolor vitae molestiae placeat ut harum rerum cupiditate laboriosam asperiores inventore, accusantium recusandae temporibus explicabo officia doloribus.
                    </p>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="project-box">
                    <i className="project-box__icon">< GiRegeneration /></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        AT&T
                    </h3>
                    <p className="project-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorem cumque velit, rem dolor vitae molestiae placeat ut harum rerum cupiditate laboriosam asperiores inventore, accusantium recusandae temporibus explicabo officia doloribus.
                    </p>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="project-box">
                
                <i className="project-box__icon">< GiFarmTractor /></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Dev Desk Queue
                    </h3>
                    <p className="project-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorem cumque velit, rem dolor vitae molestiae placeat ut harum rerum cupiditate laboriosam asperiores inventore, accusantium recusandae temporibus explicabo officia doloribus.
                    </p>
                </div>
            </div>
            
        </div>
        
    </section>
    )

}

export default Projects;