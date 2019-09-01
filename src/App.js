import React from 'react';
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Movies />

    </div>
  );
};

export default App;
