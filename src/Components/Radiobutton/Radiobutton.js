import React from 'react';
import './Radiobutton.css';

export default function Radiobutton({disabled}){
    return(
      <div className='radiobtnContainer'>
        <p>Do you order pizza often?</p>
        <label className='labelRadiobutton' htmlFor='radiobutton1'><p className='radiobuttonAnswer'>Yes</p>
          <input
            className='radiobutton'
            id='radiobutton1'
            type='radio'
            name='radio'
            disabled={disabled}
          />
          <span className='radiobtnSpan'/>
        </label>
        <label className='labelRadiobutton' htmlFor='radiobutton2'><p className='radiobuttonAnswer'>No</p>
          <input
            className='radiobutton'
            id='radiobutton2'
            type='radio'
            name='radio'
            disabled={disabled}
          />
          <span className='radiobtnSpan'/>
        </label>
        <label className='labelRadiobutton' htmlFor='radiobutton3'><p className='radiobuttonAnswer'>Sometimes</p>
          <input
            className='radiobutton'
            id='radiobutton3'
            type='radio'
            name='radio'
            disabled={disabled}
          />
          <span className='radiobtnSpan'/>
        </label>
      </div>
    )
}