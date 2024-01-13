import { Generator, GeneratorHeader } from '../components'

export function CreatePalette() {
    return (
        <main className='flex flex-col'>
            <GeneratorHeader />
            <Generator />
        </main >
    )
}