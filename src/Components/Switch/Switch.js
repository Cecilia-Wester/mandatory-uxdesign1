import React from 'react';
import './Switch.css'

export default function Switch (disabled){
    return(
        <div 
            className='switch'
            style={{opacity: disabled ? 0.3 : 1}}>
            <label className='labelSwitch' htmlFor='switch'>
                <input
                id='switch'
                type='checkbox'
                disabled={disabled}
                />
                <span className='slider'></span>
            </label>
        </div>
    )
}