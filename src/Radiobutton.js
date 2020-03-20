import React from 'react';

export default function Radiobutton(){
    return(
        <div className='radiobtnContainer'>
            <input
              className='radiobutton'
              id='radiobutton'
              type='radiobutton'
            />
            <label className='labelRadiobutton' htmlFor='radiobutton'>On/Off</label>
          </div>
    )
}