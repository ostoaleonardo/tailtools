import { Route, Routes } from 'react-router-dom'
import { Home, FindColor, CreatePalette, GradientCreator } from './pages'
import { Nav } from './components'

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/find' element={<FindColor />} />
                <Route path='/create' element={<CreatePalette />} />
                <Route path='/gradient' element={<GradientCreator />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </>
    )
}

export default App
