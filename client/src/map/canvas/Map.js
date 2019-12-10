import React, {useState, useContext, useEffect} from 'react'
import CanvasCell from './CanvasCell'
import {OptionsContext} from '../../context/optionsContext'

function makeMatrix(cols, rows){
    const matrix = []
    for(let i = 0; i < cols; i++){
        matrix.push([])
        for(let j = 0; j < rows; j++){
            matrix[i].push([])
        }
    }
    return matrix
}

export default function Map(props) {
    const [canvasMatrix, setCanvasMatrix] = useState([[]])
    const [selected, setSelected] = useState([0, 0])
    const {rows, cols} = useContext(OptionsContext)

    useEffect(()=>{
        setCanvasMatrix(makeMatrix(cols, rows))
    }, [rows, cols])

    const handleHover = (row, col) => {
        setSelected([row, col])
    }

    const matrix = canvasMatrix.map((row, i) => {
        return row.map((cell, j) => {
            const isSelected = j === selected[0] && i === selected[1]
            return <CanvasCell  
                        key={`${j}.${i}`} 
                        handleHover={handleHover}
                        row={j}
                        col={i}
                        isSelected={isSelected}/>
        })
    })

    const style = {
        gridTemplateColumns: `repeat(${cols}, 32px)`,
        gridTemplateRows: `repeat(${rows}, 32px)`,
    }


    return (
        <div className="container">
            <div className="grid" style={style}>{matrix}</div>
        </div>
    )
}

