import { Route, Routes } from 'react-router-dom'
import { Home, PaletteGenerator, RandomPalette, GradientCreator } from './pages'
import { Nav } from './components'

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/palette-generator' element={<PaletteGenerator />} />
                <Route path='/random-palette' element={<RandomPalette />} />
                <Route path='/gradient-creator' element={<GradientCreator />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </>
    )
}

export default App
