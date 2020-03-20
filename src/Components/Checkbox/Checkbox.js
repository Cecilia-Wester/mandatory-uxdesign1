import React from 'react';

export default function Checkbox (disabled){
    if(disabled){
        return(
            <div className='checkboxContainer'
            style={{ backgroundColor: 'red'}}>
                <input
                    id='checkbox'
                    type='checkbox'
                    disabled={disabled}
                />
                <label className='labelCheckbox' htmlFor='checkbox'></label>
            </div>
        )
    } 
    return(
        <div className='checkboxContainer'>
            <input
                className='checkbox'
                id='checkbox'
                type='checkbox'
                disabled={disabled}
            />
            <label className='labelCheckbox' htmlFor='checkbox'></label>
        </div>
    )
}