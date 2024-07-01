import ReactDOM from 'react-dom/client'
import Providers from './Providers.tsx'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Providers>
            <App />
            <Analytics />
        </Providers>
    </BrowserRouter>
)
