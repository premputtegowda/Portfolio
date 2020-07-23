import React from 'react';
import Logo from '../static/prem_logo.png'


export default function Header() {


  return (
    <header className='header'>
      <div className="header__logo-container">
        <img src={Logo} alt="Prem logo" className='header__logo'/>
      </div>

      <div className='header__text-box'>
          <h1 className="heading-primary">
              <span className="heading-primary--main">
                Prem Puttegowda
              </span>
              <span className="heading-primary--sub">
                  fullstack software engineer
              </span>
    
          </h1>
          
          
            <a href="#section-about" className="btn btn--white btn--animated">About Me</a>
      
      </div>
    </header>
  );
}