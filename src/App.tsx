import React from 'react';
import HotelsComponent from './components/HotelsComponent'
import './App.css';
import HotelForm from "./components/HotelForm";

function App() {
  return (
    <div className="App">
      <HotelsComponent/>
      <HotelForm/>
    </div>
  );
}

export default App;
