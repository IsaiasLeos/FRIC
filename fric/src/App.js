import React, {useState,useEffect}from 'react';
import GeneralView from './generalView/generalView';

function App() {
  const [initialData,setInitialData] = useState([{}])

  useEffect(() => {
    fetch('/events').then(
      response => response.json()
    ).then(data => setInitialData(data))
  },[]);
  return (
    <div>
      <GeneralView />
      {/* <h1>{initialData.name}</h1> */}
    </div>
    
  );
}

export default App;


