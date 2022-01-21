import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BackendBoilerPlate from './pages/BackendBoilerplate';
import FrontendBoilerPlate from './pages/FrontendBoilerplate';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
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
