import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter } from "react-router-dom"
import { OptionsContextProvider } from './context/optionsContext'

ReactDOM.render(
    <BrowserRouter>
        <OptionsContextProvider>
            <App />
        </OptionsContextProvider>   
    </BrowserRouter>, 
    document.getElementById('root')
)


