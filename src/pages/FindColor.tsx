import { ColorPalette, ExamplesComponents, Landing } from '../components'

export function FindColor() {
    return (
        <main className='flex flex-col'>
            <Landing />
            <ColorPalette />
            <ExamplesComponents />
        </main>
    )
}