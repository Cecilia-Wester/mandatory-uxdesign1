import React from 'react';

export default function Checkbox (){
    return(
        <div className='checkboxContainer'>
            <input
              className='checkbox'
              id='checkbox'
              type='checkbox'
            />
            <label className='labelCheckbox' htmlFor='checkbox'>Yes/No</label>
          </div>
    )
}