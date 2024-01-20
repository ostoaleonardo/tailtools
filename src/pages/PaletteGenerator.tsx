import { ColorPalette, Examples, PaletteGeneratorHeader } from '../components'

export function PaletteGenerator() {
    return (
        <main className='flex flex-col'>
            <PaletteGeneratorHeader />
            <ColorPalette />
            <Examples />
        </main>
    )
}