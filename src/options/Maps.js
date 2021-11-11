import React, {useContext} from 'react'
import {OptionsContext} from '../context/optionsContext'


const context = require.context('../assets/maps', false, /\.(png|jpe?g|svg)$/)

const images = context.keys().map((key) => {
    return context(key)
});

export default function Maps() {
    const {setMap, map} = useContext(OptionsContext)

    const imageOptions = images.map(image => {
        const style = {
            backgroundImage: `url(${image})`,
            border: image === map ? "red 5px solid" : "none",
        }
        console.log(image)
        return (
            <div style={style} onClick={()=>setMap(image)} key={image} className="map-option">
            </div>
        )
    })

    return (
        <div className="map-options-grid">
            {imageOptions}
        </div>
    )
}
