import React from 'react';
import work from '../data/work_data'


function Work(props){
    const { job } = props;
    return (
        <div className="row">
        <div className="work">
            <div className="work__company">
    <h2 className='heading-secondary-special'>{job.company}</h2>
            </div>
            <div className="work__detail">
                <div className="work__detail_headers">
                <h3 className="heading-tertiary work__detail_headers-role">
                    {job.title}
                </h3>
                <h3 className="heading-tertiary work__detail_headers-date">
                    July 2015 - September 2019
                </h3>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laboriosam quo provident. Aperiam quia facere quam corporis, quod temporibus reiciendis! Pariatur doloremque iusto facere vitae nostrum maiores culpa fugiat enim!
                </p>
                
            </div>
        </div>
    </div>
        
    )
}

export default Work;