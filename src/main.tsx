import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import { ColorProvider } from '@/context/colorContext.tsx'
import App from './App.tsx'
import '@/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <NextUIProvider>
            <ColorProvider>
                <App />
            </ColorProvider>
        </NextUIProvider>
    </BrowserRouter>
)
