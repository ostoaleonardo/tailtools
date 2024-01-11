import { ColorPalette, ExamplesComponents, Landing } from '../components'

export function FindColor() {
    return (
        <main className='flex flex-col bg-titan-white'>
            <Landing />
            <ColorPalette />
            <ExamplesComponents />
        </main>
    )
}