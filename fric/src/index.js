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
import configurationContentView from './configurationcontentview/configurationContentView'
import taskContentView from './taskcontentview/taskContentView.js';
import taskDetailedView from './taskcontentview/taskDetailedView.js'
import subtaskDetailedView from './subtaskContentView/subtaskDetailedView.js'
import setupContentView from './setupContentView/setupContentView.js';
import helpView from './helpView/helpView.js';
import eventTree from './eventTree/eventTree';
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
    <Route exact path="/TaskDetails" component={taskDetailedView} />
    <Route exact path="/Subtask" component={subtaskContentView} />
    <Route exact path="/SubtaskDetails" component={subtaskDetailedView} />
    <Route exact path="/AnalystSummary" component={analystSummaryView} />
    <Route exact path="/SystemView" component={systemContentView} />
    <Route exact path="/SystemDetailed" component={systemContentView} />
    <Route exact path="/Findings" component={findingContentView} />
    <Route exact path="/Archive" component={archiveContentView} />
    <Route exact path="/Configuration" component={configurationContentView} />
    <Route exact path="/Setup" component={setupContentView} />
    <Route exact path="/Help" component={helpView} />
    <Route exact path="/Tree" component={eventTree} />
  </Router>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
