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
                type='text' 
              />
              <label className='labelTextInputField' for='textInputField'> Name </label>
              <div className='textInputFieldBottom'></div>
          </div>
          <div className='switchContainer'>
            <input
              className='switch'
              id='switch'
              type='checkbox'
            />
            <label className='labelSwitch' for='switch'>On/Off</label>
          </div>
          <div className='checkboxContainer'>
            <input
              className='checkbox'
              id='checkbox'
              type='checkbox'
            />
            <label className='labelCheckbox' for='checkbox'>Yes/No</label>
          </div>
          <div className='radiobtnContainer'>
            <input
              className='radiobutton'
              id='radiobutton'
              type='radiobutton'
            />
            <label className='labelRadiobutton' for='radiobutton'>On/Off</label>
          </div>
        </form>

      </header>
    </div>
  );
}

export default App;
