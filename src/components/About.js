import React from 'react';
import prem_img from '../static/prem.png'


function About(){

    return(
        <section className='section-about' id="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className='heading-secondary'>About Me</h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                   <h3 className="heading-tertiary u-margin-bottom-small">
                       Coder, Developer
                   </h3>
                   <p className="paragraph">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis placeat praesentium consectetur veniam. Omnis rem soluta natus in nihil aliquid laudantium at? Tempore nemo voluptate ratione commodi ducimus obcaecati vero.
                   </p>
                   <h3 className="heading-tertiary u-margin-bottom-small">
                       Coder, Developer
                   </h3>
                   <p className="paragraph">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis placeat praesentium consectetur veniam. Omnis rem soluta natus in nihil aliquid laudantium at? Tempore nemo voluptate ratione commodi ducimus obcaecati vero.
                   </p>

                   <a href="/" className="btn-text u-margin-bottom-small">Learn More &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={prem_img} alt="Prem" className="composition__photo composition__photo--p1"/>
                        <img src={prem_img} alt="Prem" className="composition__photo composition__photo--p2"/>
                        <img src={prem_img} alt="Prem" className="composition__photo composition__photo--p3"/>
                    </div>

                </div>
            </div>
        </section>  
    )
}

export default About;