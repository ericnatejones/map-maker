import React, {useState, createContext} from 'react'
const OptionsContext = createContext()


function OptionsContextProvider(props) {

    const [rows, setRows] = useState(5)
    const [cols, setCols] = useState(5)
    
    const [spriteRows, setSpriteRows] = useState(5)
    const [spriteCols, setSpriteCols] = useState(5)

    const [map, setMap] = useState("")

    return (
        <OptionsContext.Provider value={{ 
                map, setMap,
                rows, setRows, 
                cols, setCols,
                spriteCols, setSpriteCols,
                spriteRows, setSpriteRows
                }}>
            {props.children}
        </OptionsContext.Provider>
    )
}

export {OptionsContext, OptionsContextProvider}