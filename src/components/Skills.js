import React from 'react';
import { GiRegeneration } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { GiTicket } from "react-icons/gi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";



// import data from "../data/data"

function Skills () {
   
    return (
    <section className='section-skills' id='section-skills'>
        <div className="row">
            <div className="col-1-of-4">
                <div className="skill-box">
                <i className="skill-box__icon"> <FaHtml5 /> </i>
                <h3 className="heading-tertiary">
                        HTML
                    </h3>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="skill-box">
                <i className="skill-box__icon"> <FaCss3 /> </i>
                <h3 className="heading-tertiary">
                        CSS
                    </h3>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="skill-box">
                <i className="skill-box__icon"> <IoLogoJavascript/> </i>
                <h3 className="heading-tertiary">
                        JavaScript
                    </h3>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="skill-box">
                <i className="skill-box__icon"> <FaSass /> </i>
                <h3 className="heading-tertiary">
                        SASS
                    </h3>
                </div>
            </div>

        </div>

        
        <div className="row">
            <div className="col-1-of-4">
                <div className="skill-box">
                <i className="skill-box__icon"> <FaReact /> </i>
                <h3 className="heading-tertiary">
                        React | Redux 
                    </h3>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="skill-box">
                <i className="skill-box__icon"> <FaNode /> </i>
                <h3 className="heading-tertiary">
                        NodeJs | Express | Knex
                    </h3>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="skill-box">
                <i className="skill-box__icon"> <AiOutlineConsoleSql /> </i>
                <h3 className="heading-tertiary">
                        SQL | PostgreSQL | Sqlite
                    </h3>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="skill-box">
                <i className="skill-box__icon"> <IoLogoPython /> </i>
                <h3 className="heading-tertiary">
                        Python
                    </h3>
                </div>
            </div>

        </div>
        
    </section>
    )

}

export default Skills;