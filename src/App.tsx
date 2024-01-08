import { Route, Routes } from 'react-router-dom'
import { FindColor, CreatePalette } from './pages'

function App() {
    return (
        <Routes>
            <Route path='/find' element={<FindColor />} />
            <Route path='/create' element={<CreatePalette />} />
            <Route path='*' element={<FindColor />} />
        </Routes>
    )
}

export default App
