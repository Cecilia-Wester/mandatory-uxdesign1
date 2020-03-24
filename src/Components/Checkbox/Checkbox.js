import React from 'react';
import './Checkbox.css';

export default function Checkbox ({disabled, value, onChange}){
    return(
        <div>
            <p>What do you always want on your pizza?</p>
            <label className='checkboxContainer' htmlFor='checkbox1' style={{color: 'white'}}>Oregano
                <input
                    className='checkbox'
                    id='checkbox1'
                    type='checkbox'
                    disabled={disabled}
                    checked={value}
                    onChange={onChange}
                />
                <span className="checkmark"></span>
            </label>
            <label className='checkboxContainer' htmlFor='checkbox2'style={{color: 'white'}}>Tomate sauce
                <input
                    className='checkbox'
                    id='checkbox2'
                    type='checkbox'
                    disabled={disabled}
                    checked={value}
                    onChange={onChange}
                />
                <span className="checkmark"></span>
            </label>
            <label className='checkboxContainer' htmlFor='checkbox3'style={{color: 'white'}}>Cheese
                <input
                    className='checkbox'
                    id='checkbox3'
                    type='checkbox'
                    disabled={disabled}
                    checked={value}
                    onChange={onChange}
                />
                <span className="checkmark"></span>
            </label>
            <label className='checkboxContainer' htmlFor='checkbox4'style={{color: 'white'}}>Ham
                <input
                    className='checkbox'
                    id='checkbox4'
                    type='checkbox'
                    disabled={disabled}
                    checked={value}
                    onChange={onChange}
                />
                <span className="checkmark"></span>
            </label>
            <label className='checkboxContainer' htmlFor='checkbox5'style={{color: 'white'}}>Pineapple
                <input
                    className='checkbox'
                    id='checkbox5'
                    type='checkbox'
                    disabled={disabled}
                    checked={value}
                    onChange={onChange}
                />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}