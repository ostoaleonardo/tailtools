import { Route, Routes } from 'react-router-dom'
import { Home, FindColor, CreatePalette } from './pages'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/find' element={<FindColor />} />
            <Route path='/create' element={<CreatePalette />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}

export default App
