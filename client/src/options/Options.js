import React, {useContext} from 'react'
import {OptionsContext} from '../context/optionsContext'
import GridConfig from './GridConfig'
import Uploader from './Uploader';


export default function Options(props) {
    return (
        <div>
            <GridConfig setRows = {useContext(OptionsContext).setSpriteRows}
                        setCols = {useContext(OptionsContext).setSpriteCols}
                        rows = {useContext(OptionsContext).spriteRows}
                        cols = {useContext(OptionsContext).spriteCols}
                        which="Spite Sheet"/>
            <GridConfig setRows = {useContext(OptionsContext).setRows}
                        setCols = {useContext(OptionsContext).setCols}
                        rows = {useContext(OptionsContext).rows}
                        cols = {useContext(OptionsContext).cols}
                        which="Canvas"/>
            <Uploader/>
        </div>
    )
}
