import React from 'react'

export default function GridConfig(props) {

    return (
        <div>
            <h2>{props.which}</h2>
            <form>
                Rows: {props.rows}
                <input 
                    type="range" 
                    min="1"
                    name="setRows" 
                    value={props.rows} 
                    onChange={(e)=>props.setRows(+e.target.value)}/>
                
                <input 
                    type="range"
                    min="1" 
                    name="setCols" 
                    value={props.cols} 
                    onChange={(e)=>props.setCols(+e.target.value)}/>
                Columns: {props.cols}
            </form>
        </div>
    )
}

