import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  let name = "Adarsh Sharma";
  return (
    <Welcome name={name} />
  )
}


export default App;
