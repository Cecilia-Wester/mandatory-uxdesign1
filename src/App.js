import React from 'react';
import './App.css';
import Textfield from './Textfield';
import Switch from './Switch';
import Checkbox from './Checkbox';
import Radiobutton from './Radiobutton';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A small questionair -</h1>
        <h3> are you connected or disconnected?</h3>
      </header>
      <main>
        <form className='form'>
          <Textfield />
          <Switch />
          <Checkbox />
          <Radiobutton />
        </form>
      </main>      
    </div>
  );
}
