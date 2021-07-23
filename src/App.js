import { useState } from 'react';
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
  const [state, setState] = useState({ page: 'home' });
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>{state.page}</h1>
      <div>
        <button onClick={() => setState({ page: Machine[state.page]['PREV'] })}>PREV</button>
        <button onClick={() => setState({ page: Machine[state.page]['NEXT'] })}>NEXT</button>
      </div>
      </header>
    </div>
  );
}

export default App;
