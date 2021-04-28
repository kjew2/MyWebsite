import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import Projects from './components/pages/ProjectsPage/Projects'
import Resume from './components/pages/ResumePage/Resume'
import React, {useEffect} from 'react';
//ga
import ReactGA from 'react-ga';

//ga

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-195675661-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(window.location.pathname + window.location.search)
  }, [])
  return (
    <div className="App">
      <Router>
        <NavBar/>  
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/projects' exact component={Projects}/>
          <Route path='/Kyle_Jew_Resume_2021.pdf'/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
