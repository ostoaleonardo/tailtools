import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { ColorProvider } from './context/colorContext.tsx'
import App from './App.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NextUIProvider>
            <ColorProvider>
                <App />
            </ColorProvider>
        </NextUIProvider>
    </React.StrictMode>,
)
