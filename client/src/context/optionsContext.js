import React, {useState, createContext} from 'react'
const OptionsContext = createContext()


function OptionsContextProvider(props) {

    const [rows, setRows] = useState(5)
    const [cols, setCols] = useState(5)
    
    const [spriteRows, setSpriteRows] = useState(5)
    const [spriteCols, setSpriteCols] = useState(5)

    const [spriteMap, setSpriteMpa] = useState()

    return (
        <OptionsContext.Provider value={{ 
                setRows, 
                setCols,
                rows,
                cols,
                setSpriteCols,
                setSpriteRows,
                spriteCols,
                spriteRows
                }}>
            {props.children}
        </OptionsContext.Provider>
    )
}

export {OptionsContext, OptionsContextProvider}