import './App.css';
import Header from './Header';
import Red from './Red';
import Blue from './Blue';
import Green from './Green';

import React, {useState} from 'react';

function App() {
  const [color, setColor] = useState("");

  console.log(color)
  const divStyle = {
    color: 'red',
    backgroundColor: color
  };


  return (
    <div className="App">
        <Header />
        <Red red={() =>setColor("red")} />
        <Blue blue={() =>setColor("blue")}/>
        <Green green={() =>setColor("green")}/>
    </div>
  );
}


export default App;
