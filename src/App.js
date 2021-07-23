import { useState, useEffect } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './App.css';


const Machine = {
  home: {
    NEXT: 'projects',
    PREV: 'contact'
  },
  projects: {
    NEXT: 'about',
    PREV: 'home'
  },
  about: {
    NEXT: 'contact',
    PREV: 'projects'
  },
  contact: {
    NEXT: 'home',
    PREV: 'about'
  },
};


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
    
        <MouseWheelNav />
      </BrowserRouter>
      </header>
    </div>
  );
}

const MouseWheelNav = withRouter((props) => {
  const [state, setState] = useState({ page: 'home' });
  
  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    }
  })
  
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setTimeout(() => {
        setState({ page: Machine[state.page]['NEXT'] })
        props.history.push('/' + (state.page === 'home' ? '' : state.page))
      }, 150)
    } else {
      setTimeout(() => {
        setState({ page: Machine[state.page]['PREV'] })
        props.history.push('/' + (state.page === 'home' ? '' : state.page))
      }, 150)
    }
  }
  
  return null
})

const Home = () => <h1>Home page</h1>;
const Projects = () => <h1>Projects we are working on</h1>;
const About = () => <h1>We want to tell about us!</h1>;
const Contact = () => <h1>Call us! We are waiting for you...</h1>;

export default App;
