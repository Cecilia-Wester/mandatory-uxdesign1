import React, { useState } from 'react';
import './Textfield.css';

export default function Textfield ({disabled, value, onChange}){
    return(
        <div className='textInputFieldContainer'>
            <input
                className='textInputField'
                id='textInputField'
                type='text' 
                disabled={disabled}
                value={disabled ? '' : value}
                onChange={onChange}
                minLength={0}
                required
            />
            <label className='labelTextInputField' htmlFor='textInputField'> Favorite pizza </label>
            <div className='textInputFieldBottom'></div>
        </div>
    )
}