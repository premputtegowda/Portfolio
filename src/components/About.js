import React from 'react';
import prem_img from '../static/prem.png'


function About(){

    return(
        <section className='section-about' id="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className='heading-secondary'>About Me</h2>
            </div>

            <div className="row">
                <div className="col-1-of-2 about-me">
                   <h3 className="heading-tertiary u-margin-bottom-small">
                       Coder, Developer
                   </h3>
                   <p className="paragraph">
                       My name is Prem Puttegowda and I am a full stack engineer. I specialize in react front end library and node backend framework. 
                   </p>
                   <h3 className="heading-tertiary u-margin-bottom-small">
                        Generalist, Problem Solver
                   </h3>
                   <p className="paragraph">
                       In the past, I worked as a product manager, Business Analyst, Project Manager and a QA tester. I believe this gives me a new perspective and allow me to come up with creative solutions. 
                   </p>

                   {/* <a href="/" className="btn-text u-margin-bottom-small">Learn More &rarr;</a> */}
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={prem_img} alt="Prem" className="composition__photo composition__photo--p1"/>
                        {/* <img src={prem_img} alt="Prem" className="composition__photo composition__photo--p2"/>
                        <img src={prem_img} alt="Prem" className="composition__photo composition__photo--p3"/> */}
                    </div>

                </div>
            </div>
        </section>  
    )
}

export default About;