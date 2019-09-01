import React from 'react';
import Navbar from "./components/Navbar";
import AddMovie from "./components/AddMovie";
import Movies from "./components/Movies";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AddMovie />
      <Movies />

    </div>
  );
};

export default App;
