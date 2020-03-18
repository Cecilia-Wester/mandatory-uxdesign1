import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form className='form'>
          <div className='textInputFieldContainer'>
              <input
                className='textInputField'
                id='textInputField'
                type='text field' 
              />
              <label className='labelTextInputField' for='textInputField'> Name </label>

          </div>
        
        </form>

      </header>
    </div>
  );
}

export default App;
