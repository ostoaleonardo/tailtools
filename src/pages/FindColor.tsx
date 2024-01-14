import { ColorPalette, Examples, FindColorHeader } from '../components'

export function FindColor() {
    return (
        <main className='flex flex-col'>
            <FindColorHeader />
            <ColorPalette />
            <Examples />
        </main>
    )
}