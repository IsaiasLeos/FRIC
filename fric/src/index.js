import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import eventContentView from './eventcontentview/eventContentView';
import eventDetailedView from './eventcontentview/eventDetailedView';

import taskContentView from './taskcontentview/taskContentView.js';

import analystSummaryView from './analystsummaryview/analystSummaryView';
import systemContentView from './systemcontentview/systemContentView';


import { Route, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <React.StrictMode>
        <App />
      </React.StrictMode>,
   </Route>
    <Route exact path="/Event" component={eventContentView} />
    <Route exact path="/EventDetailed" component={eventDetailedView} />

    <Route exact path="/Task" component={taskContentView} />

    <Route exact path="/AnalystSummary" component={analystSummaryView} />
    <Route exact path="/SystemView" component={systemContentView} />

  </Router>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
