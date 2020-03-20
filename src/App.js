import React, {useState} from 'react';
import './App.css';
import Textfield from './Components/Textfield/Textfield';
import Switch from './Components/Switch/Switch';
import Checkbox from './Components/Checkbox/Checkbox';
import Radiobutton from './Components/Radiobutton/Radiobutton';

export default function App() {
  const [disabled, setDisabled] = useState(false);
  
  function onClickDisable(e){
    e.preventDefault()
    if(disabled){
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>A small questionair -</h1>
        <h3> are you able or disabled?</h3>
      </header>
      <main>
        <form className='form'>
          <Textfield disabled={disabled}/>
          <Switch disabled={disabled}/>
          <Checkbox disabled={disabled}/>
          <Radiobutton disabled={disabled}/>
        </form>
        <button className='disableButton' onClick={onClickDisable}>Disable</button>
      </main>      
    </div>
  );
}
