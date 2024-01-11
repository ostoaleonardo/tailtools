import { Generator, GeneratorHeader } from '../components'

export function CreatePalette() {
    return (
        <main className='flex flex-col bg-titan-white'>
            <GeneratorHeader />
            <Generator />
        </main >
    )
}