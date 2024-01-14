import { ColorPalette, Examples, Landing } from '../components'

export function FindColor() {
    return (
        <main className='flex flex-col'>
            <Landing />
            <ColorPalette />
            <Examples />
        </main>
    )
}