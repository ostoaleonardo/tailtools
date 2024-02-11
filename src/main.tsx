import ReactDOM from 'react-dom/client'
import Providers from './Providers.tsx'
import App from './App.tsx'
import '@/styles/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Providers>
            <App />
        </Providers>
    </BrowserRouter>
)
