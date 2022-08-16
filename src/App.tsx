import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { stackNavList } from './assets/data/content';

function App() {
  return (
    <Router>
      <Switch>
        {stackNavList.map((item) => (
          <Route
            exact
            key={item.id}
            path={item.routes}
            component={item.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
