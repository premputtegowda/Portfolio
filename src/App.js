import React from 'react';
//material-ui
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import WorkList from './components/WorkList'
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
            <Skills />
            <Project />
            <WorkList />
            <Contact />
            <Footer />
         </div>
      
  
  );
}

export default App;
