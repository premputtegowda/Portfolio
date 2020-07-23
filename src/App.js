import React from 'react';
//material-ui
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'



//components


// import './App.css';
import './sass/main.scss';


function App() {
  
  return (
    
        
         <div>
             
              <NavBar />
            
            <Header />
            <About />
            <Projects />
            <Project />
            <Contact />
            <Footer />
         </div>
      
  
  );
}

export default App;
