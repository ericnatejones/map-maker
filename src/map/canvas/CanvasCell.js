import React from 'react'

export default function CanvasCell(props) {
    
    const style = {
        border:  props.isSelected && "5px solid red"
    }

    return (
        <div    onMouseOver={()=>props.handleHover(props.row, props.col)} 
                className="cell"
                style={style}>
        </div>
    )
}
