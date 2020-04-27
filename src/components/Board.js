import React, { Component } from 'react';
import Square from "./Square";

class Board extends React.Component{
    
    
    renderSquare(i) {
        return ( 
            <Square 
            key = {i}
            value={this.props.squares[i]}
            onClick={ () => this.props.onClick(i)} 
            />
            )
        }
        
        
        render () {  
            const boardSize = 3;
            let eachSquare = [];
            for (let i = 0; i < boardSize; i++) {
                let row = [];
                for (let j = 0; j < boardSize; j++) {
                    row.push(this.renderSquare(i * boardSize + j))
                }
                    eachSquare.push(<div key = {i} className = "board-row">{row}</div>)
            }         
        return (
        
        <div>
            {eachSquare}
        </div>
        
        )
    }
}

export default Board
