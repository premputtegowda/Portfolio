import React from 'react';

function Project(){
    return (
        <section className='section-project' id='section-project'>
            <div className="u-center-text">
                <h2 className="heading-secondary u-margin-bottom-big">
                    Recent Projects
                </h2>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="card">
                            
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture-1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">  
                                    <span className="card__heading-span card__heading-span--1">Team Reel</span>
                                </h4>
                                <p className="card__details">
                                   Team Reel( formerly Alpaca videos) is a video platform that enables users to upload videos of their performance and obtain feedback from team members and mentors
                                </p>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card-content">
                                    <h4 className="heading-tertiary-white u-margin-bottom-medium">
                                        Project Lead, Frontend and Backend Developer
                                    </h4>
                                    <a href="https://www.alpacavids.com/" target="_blank" className="btn btn--white u-margin-bottom-medium">
                                        App
                                    </a>
                                    <a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-fe" target="_blank"
                                    className="btn btn--white u-margin-bottom-medium">
                                        Github
                                    </a>

                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* 2 */}

                    <div className="col-1-of-2">
                        <div className="card">
                            
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture-2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">  
                                    <span className="card__heading-span card__heading-span--2">The Queue</span>
                                </h4>
                                <p className="card__details">
                                This app allows Lambda School students to report their concerns/issues to Lambda School administrators and allows the adminstrators to manage the resolution of those issues.
                                </p>
                            </div>

                            <div className="card__side card__side--back card__side--back-2">

                                <div className="card-content">
                                    
                                    <h4 className="heading-tertiary-white u-margin-bottom-medium">
                                        Frontend Developer
                                    </h4>
                                    <a href="https://queue.bw-dev-desk-queue-1.now.sh/" target="_blank"
                                    className="btn btn--white u-margin-bottom-medium">
                                        App
                                    </a>
                                    <a href="https://github.com/BW-Dev-Desk-Queue-1/Front-End"
                                    target="_blank"
                                    className="btn btn--white u-margin-bottom-medium">
                                        Github
                                    </a>

                                    
                                </div>
                            </div>
                            </div>
                        
                        </div>
                    </div>

                    {/* 3 */}
                   <div className="row">
                    <div className="col-1-of-2">
                        <div className="card">
                            
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture-3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">  
                                    <span className="card__heading-span card__heading-span--3">Conway's Game of Life</span>
                                </h4>
                                <p className="card__details">
                                    This is a simulation of 
                                    'The Game of Life', a cellular automaton devised by the British mathematician John Horton Conway in 1970.
                                </p>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card-content">
                                    <h4 className="heading-tertiary-white u-margin-bottom-medium">
                                    Frontend Developer
                                    </h4>
                                    <a href="https://master.d1mvw0y7r613h.amplifyapp.com/"
                                    target="_blank" className="btn btn--white u-margin-bottom-medium">
                                        App
                                    </a>
                                    <a href="https://github.com/premputtegowda/conways-game-of-life"
                                    target="_blank" 
                                    className="btn btn--white u-margin-bottom-medium">
                                        Github
                                    </a>

                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* 4 */}

                    <div className="col-1-of-2">
                      <div className="card">
                            
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture-4">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">  
                                    <span className="card__heading-span card__heading-span--4">Portfolio</span>
                                </h4>
                                <p className="card__details">
                                    This is a portfolio app created using react and node.js. This project demonstrates my css/sass skills and animation effects in css. 
                                </p>
                            </div>
                            <div className="card__side card__side--back card__side--back-4">
                                <div className="card-content">
                                    <h4 className="heading-tertiary-white u-margin-bottom-medium">
                                    Frontend and Backend Developer
                                    </h4>
                                    <a href="https://premputtegowda.me" 
                                    target="_blank"
                                    className="btn btn--white u-margin-bottom-medium">
                                        App
                                    </a>
                                    <a href="https://github.com/premputtegowda/portfolio" 
                                    target="_blank"
                                    className="btn btn--white u-margin-bottom-medium">
                                        Github
                                    </a>

                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    
                </div>
            </div>
        </section>   
    )

}

export default Project;