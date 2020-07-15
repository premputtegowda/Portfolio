import React from 'react';
//material-ui
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Project from './components/Project'
import Contact from './components/Contact'


//components


// import './App.css';
import './sass/main.scss';


function App() {
  
  return (
    
        
         <div>
              {/* <NavBar /> */}
            
            <Header />
            <About />
            <Projects />
            <Project />
            <Contact />
         </div>
      
  
  );
}

export default App;
