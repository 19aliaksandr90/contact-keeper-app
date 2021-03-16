import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import ContactState from './context/contacts/ContactState';

import './App.css';

const App: React.FC = () => (
  <ContactState>
    <Router>
      <Navbar>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
        My App
      </Navbar>
    </Router>
  </ContactState>
);

export default App;
