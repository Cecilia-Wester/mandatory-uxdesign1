import React, {useState} from 'react';
import './App.css';
import Textfield from './Components/Textfield/Textfield';
import Switch from './Components/Switch/Switch';
import Checkbox from './Components/Checkbox/Checkbox';
import Radiobutton from './Components/Radiobutton/Radiobutton';

export default function App() {
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false)
  
  function onClickDisable(e){
    e.preventDefault()
    if(disabled){
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function onChange(e){
    e.preventDefault()
    setValue(e.target.value)
  }

  return (  
    <div className="App">
      <header className="App-header">
        <h1>A small questionair -</h1>
        <h3>Do you like pizza?</h3>
      </header>
      <main>
        <form className='form'>
          <Textfield disabled={disabled} value={value} onChange={onChange}/>
          <Switch disabled={disabled}/>
          <Checkbox disabled={disabled} checked={checkboxValue} onChange={() => setCheckboxValue(true)}/>
          <Radiobutton disabled={disabled}/>
        </form>
        <button className='disableButton' onClick={onClickDisable} style={{marginTop: '20px'}}>{disabled ?  'Use form': 'Disable form' }</button>
      </main>
    </div>
  );
}
