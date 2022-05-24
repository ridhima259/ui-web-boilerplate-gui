import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BackendBoilerPlate from './pages/BackendBoilerplate';
import FrontendBoilerPlate from './pages/FrontendBoilerplate';
// import Home from './pages/Home';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/react-boilerplate">
          <FrontendBoilerPlate />
        </Route>
        <Route exact path="/backend-boilerplate">
          <BackendBoilerPlate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
