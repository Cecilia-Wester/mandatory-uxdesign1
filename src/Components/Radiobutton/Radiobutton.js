import React from 'react';

export default function Radiobutton(disabled){
    return(
        <div className='radiobtnContainer'>
            <input
              className='radiobutton'
              id='radiobutton'
              type='radiobutton'
              disabled={disabled}
            />
            <label className='labelRadiobutton' htmlFor='radiobutton'>On/Off</label>
          </div>
    )
}