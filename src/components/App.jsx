import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Tamagotchi from './Tamagotchi'
import Header from './Header'



function App() {
  return (
    <div>
      <Header />
      <Tamagotchi />
    </div>
  );
}
export default App;
