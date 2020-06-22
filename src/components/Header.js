import React from 'react';
import Logo from '../static/prem_logo.png'


export default function Header() {


  return (
    <header className='header'>
      <div className="logo-container">
        <img src={Logo} alt="Prem logo" className='logo'/>
      </div>

      <div className='text-box'>
          <h1 className="heading-primary">
              <span className="heading-primary-main">
                Prem Puttegowda
              </span>
              <span className="heading-primary-sub">
                  fullstack developer
              </span>
    
          </h1>
          <a href="/" className="btn btn-white btn-animated">Continue</a>
      </div>
    </header>
  );
}