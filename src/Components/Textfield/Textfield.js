import React from 'react';
import './Textfield.css'

export default function Textfield (disabled){
    return(
        <div className='textInputFieldContainer' style={{backgroundColor: disabled ? 'red' : null}}>
            <input
                className='textInputField'
                id='textInputField'
                type='text' 
                disabled={disabled}
            />
            <label className='labelTextInputField' htmlFor='textInputField'> Name </label>
            <div className='textInputFieldBottom'></div>
        </div>
    )
}