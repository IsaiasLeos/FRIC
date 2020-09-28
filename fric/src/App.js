import React from 'react';
import GeneralView from './generalView/generalView';
import EventContentView from './eventcontentview/eventContentView';
import Portal from './findingscontentview/portal'
import {useEffect, useSState, useRef} from 'react';


function App() {
  return (
    <div>
      <GeneralView />
      
    </div>
  );
}

export default App;
