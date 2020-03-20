import React from 'react';

export default function Switch (){
    return(
        <label className='labelSwitch' htmlFor='switch'>
            <input
              id='switch'
              type='checkbox'
            />
            <span className='slider'></span>
          </label>
    )
}