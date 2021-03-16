import React from 'react';
import 'bulma/css/bulma.css';
import './index.css';
import '@fortawesome/fontawesome-free';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { useTransition } from 'react-spring'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className='hero is-background is-fullheight'>
          <Router>
            <div className='hero-head'></div>
            <div className='hero-body'>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/projects">
                  <Projects />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
