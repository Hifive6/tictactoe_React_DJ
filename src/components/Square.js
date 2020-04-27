import React, { Component }from 'react';

import Board from './Board'


function Square(props) {
     
    
        return (
            <button className='square' 
            onClick={props.onClick}>
                {props.value}
            </button>
        )
    
} 

export default Square