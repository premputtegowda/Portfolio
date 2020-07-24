import React, { useState } from 'react';

function NavBar(){

    const [showMenu, setShowMenu] = useState(false);

    function handleClick(){
     
        setShowMenu(!showMenu);
    }
    console.log(showMenu);
    return (
        <div class="navigation">
            <button className={"navigation__button " + (showMenu ? "navigation__button-clicked":'') } onClick = { handleClick}>
                
                <span className="navigation__icon">&nbsp;</span>
            </button>
            <div className={'navigation__background ' + (showMenu ? 'navigation__background-shown':'')} >
                &nbsp;
            </div>
            <div className={"navigation__nav " + (showMenu ? 'navigation__nav-shown':'')} onClick = {handleClick}>
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#section-about" className='navigation__link'>About Me</a></li>

                    <li className="navigation__item"><a href="#section-skills" className='navigation__link'>Skills</a></li>

                    <li className="navigation__item"><a href="#section-project" className='navigation__link'>Projects</a></li>

                    <li className="navigation__item"><a href="#section-work" className='navigation__link'>Work</a></li>
                    
                    <li className="navigation__item"><a href="#section-contact" className='navigation__link'>Contact Me</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;