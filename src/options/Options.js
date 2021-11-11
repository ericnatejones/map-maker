import React, {useContext} from 'react'
import {OptionsContext} from '../context/optionsContext'
import GridConfig from './GridConfig'
import Maps from './Maps';

export default function Options() {
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
            <Maps />
        </div>
    )
}


