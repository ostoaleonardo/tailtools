import { useEffect, useState } from 'react'
import { Color, RandomPaletteHeader } from '.'
import { useFetch } from '@/hooks'
import { getRandomColor } from '@/utils'
import { INITIAL_RANDOM_PALETTE } from '@/constants'

export function PaletteGrid() {
    const { generatePalette } = useFetch()
    const [isLoading, setIsLoading] = useState(false)
    const [palette, setPalette] = useState(INITIAL_RANDOM_PALETTE)

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (isLoading || event.repeat) return
            if (event.code === 'Space') getPalette()
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isLoading])

    const getPalette = async () => {
        setIsLoading(true)
        const color = getRandomColor()
        const palette = await generatePalette(color, 'analogic-complement', 5)
        setPalette(palette)
        setIsLoading(false)
    }

    return (
        <main className='flex flex-col'>
            <RandomPaletteHeader palette={palette} getPalette={getPalette} isLoading={isLoading} />
            <section className='w-full h-[calc(100vh_-_120px)] grid grid-rows-5 md:grid-rows-none md:grid-cols-5'>
                {palette && palette.map((color, index) => (
                    <Color key={index} color={color} />
                ))}
            </section>
        </main>
    )
}
