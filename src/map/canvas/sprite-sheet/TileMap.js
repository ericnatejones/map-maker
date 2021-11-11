import React, {useContext} from 'react'
import {OptionsContext} from '../../../context/optionsContext'

export default function TileSheet() {
    const tileMap = []
    const {map} = useContext(OptionsContext)

    for(let i = 0; i < 32; i++){
        for(let j = 0; j < 32; j++){
            const style = {
                backgroundPosition: `-${j * 32}px -${i * 32}px`,
                backgroundImage: `url(${map})`
            }
            
            tileMap.push(<div 
                key={"i" + i + "j" + j}
                style={style} 
            ></div>)
        }
    }

    return (
            <div>
                {tileMap}
            </div>
    )
}

