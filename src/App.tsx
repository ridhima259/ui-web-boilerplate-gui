import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BackendBoilerPlate from './pages/BackendBoilerplate';
import FrontendBoilerPlate from './pages/FrontendBoilerplate';
// import Home from './pages/Home';
import HomePage from './pages/HomePage';
import PdfGenerator from './pages/PdfGenerator';
import JustCommunication from './pages/JustCommunication';
import CaptchaGenerator from './pages/CaptchaGenerator';
import Commentmodule from './pages/CommentModule';
import Utility from './pages/Utility';
import AddModule from './pages/AddModule';

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
        <Route exact path="/pdf-generator">
          <PdfGenerator />
        </Route>
        <Route exact path="/just-communication">
          <JustCommunication />
        </Route>
        <Route exact path="/captcha-generator">
          <CaptchaGenerator />
        </Route>
        <Route exact path="/comment-module">
          <Commentmodule />
        </Route>
        <Route exact path="/utility">
          <Utility />
        </Route>
        <Route exact path="/add-module">
          <AddModule />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
