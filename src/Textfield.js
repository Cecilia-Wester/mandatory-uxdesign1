import React from 'react';

export default function Textfield (){
    return(
        <div className='textInputFieldContainer'>
            <input
                className='textInputField'
                id='textInputField'
                type='text' 
            />
            <label className='labelTextInputField' htmlFor='textInputField'> Name </label>
            <div className='textInputFieldBottom'></div>
        </div>
    )
}