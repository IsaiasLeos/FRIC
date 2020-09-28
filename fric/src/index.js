import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import eventContentView from './eventcontentview/eventContentView';
import eventDetailedView from './eventcontentview/eventDetailedView';
import analystSummaryView from './analystsummaryview/analystSummaryView';
import systemContentView from './systemcontentview/systemContentView';
import findingContentView from './findingscontentview/findingContentView';
import subtaskContentView from './subtaskContentView/subtaskContentView';
import archiveContentView from './archivecontentview/archiveContentView';
import configurationContentView from './configurationContentView/configurationContentView';
import taskContentView from './taskcontentview/taskContentView.js';
import taskDetailedView from './taskcontentview/taskContentView'
import subtaskDetailedView from './subtaskContentView/subtaskContentView'
import setupContentView from './setupContentView/setupContentView.js';
import helpView from './helpView/helpView.js';
import { Route, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Route>
    <Route exact path="/Event" component={eventContentView} />
    <Route exact path="/EventDetailed" componsent={eventDetailedView} />
    <Route exact path="/Task" component={taskContentView} />
    <Route exact path="/TaskDetails" component={taskDetailedView} />
    <Route exact path="/Subtask" component={subtaskContentView} />
    <Route exact path="/SubtaskDetails" component={subtaskDetailedView} />
    <Route exact path="/AnalystSummary" component={analystSummaryView} />
    <Route exact path="/SystemView" component={systemContentView} />
    <Route exact path="/SystemDetailed" component={systemContentView} />
    <Route exact path="/Findings" component={findingContentView} />
    <Route exact path="/Archive" component={archiveContentView} />
    <Route exact path="/Config" component={configurationContentView} />
    <Route exact path="/Setup" component={setupContentView} />
    <Route exact path="/Help" component={helpView} />
  </Router>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
