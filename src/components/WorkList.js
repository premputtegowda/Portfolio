import React from 'react';
import jobs from '../data/work_data'
import Work from './Work'


function WorkList(){
    console.log("work", jobs)
    return (
        <section className = 'section-work'>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Work
                </h2>
                
                
            </div>
            {jobs.map(job => <Work job = {job}/> )}
            
           

        </section>
        
    )
}

export default WorkList;