import React from 'react';
import GeneralView from './generalView/generalView';
import EventContentView from './eventcontentview/eventContentView';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <GeneralView />
      <Router>
        <Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
