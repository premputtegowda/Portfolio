import React from 'react';
import Logo from '../static/prem_logo.png'

export default function footer(){
    return(
        <footer className='footer'>
            <div className="footer__logo-box">
                <img src={Logo} alt="Prem logo" className='footer__logo'/>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer_item"><a href="/" class="footer__link">About Me</a></li>
                            <li className="footer_item"><a href="/" class="footer__link">Project</a></li>
                            <li className="footer_item"><a href="/" class="footer__link">Work</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                        
                        Copyright &copy; by Prem Krishna Puttegowda.
                    </p>
                </div>
            </div>
        </footer>
    )
}