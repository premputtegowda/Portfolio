import React from 'react';
import Logo from '../static/prem_logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function footer(){
    return(
        <footer className='footer'>
            <div className="footer__logo-box">
                <img src={Logo} alt="Prem logo" className='footer__logo'/>
            </div>

            <div >
                
              <div className="footer__flex-display">
                  
                       <div>
                            <a href="https://www.linkedin.com/in/premkrishna/" target="_blank">
                                <i className="footer__icon footer__log-box--icon"> <FaLinkedin /> </i>
                            </a>
                       </div>
             
                    
                        <div>
                            <a href="https://github.com/premputtegowda" target="_blank">
                                <i className="footer__icon"> <FaGithubSquare /> </i>
                            </a>
                        </div>
                </div>
                
                
                

            </div>

            
            <div className="row">
                
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer_item"><a href="#section-about" class="footer__link">About Me</a></li>
                            
                            <li className="footer_item"><a href="#section-skills" class="footer__link">Skills</a></li>

                            <li className="footer_item"><a href="#section-project" class="footer__link">Projects</a></li>

                            <li className="footer_item"><a href="#section-work" class="footer__link">Work</a></li>

                            <li className="footer_item"><a href="#section-contact" class="footer__link">Contact</a></li>
                        </ul>
                    </div>
             
                
            </div>
        </footer>
    )
}