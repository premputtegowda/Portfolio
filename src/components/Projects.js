import React, {useState} from 'react';
import ProjectCard from './ProjectCard'

import Grid from '@material-ui/core/Grid';


import data from "../data/data"

function Projects () {
    console.log(data);
    const [count, setCount] = useState(1000)
    return (
    <div>
        {/* <Grid container spacing={2}>
            <Grid item xs={1}/>
                <Grid item xs={10}>
                <Grid item container xs={12} spacing={3}>
                    

                    {data.map(data => (
                        
                        <Grid item xs={12} sm={4}>
                            
                        
                                <ProjectCard key={Date.now()} data={data}/>
                        
                        </Grid>
                    ) )}
                    
                </Grid>
                </Grid>
            <Grid item xs={1}/>
        </Grid> */}
    </div>
    )

}

export default Projects;