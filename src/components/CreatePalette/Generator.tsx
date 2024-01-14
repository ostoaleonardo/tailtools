import { useEffect, useState } from 'react'
import { ColorGenerator } from '.'
import { useFetch } from '../../hooks'
import { getRandomColor } from '../../utils'
import { INIT_PALETTE } from '../../constants'

export function Generator() {
    const { generatePalette } = useFetch()
    const [palette, setPalette] = useState(INIT_PALETTE)

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    const getPalette = async (color: string) => {
        const palette = await generatePalette(color, 'analogic-complement', 5)
        setPalette(palette)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === 'Space') {
            const color = getRandomColor()
            getPalette(color)
        }
    }

    return (
        <section className='w-full h-[calc(100vh_-_120px)] grid grid-rows-5 md:grid-rows-none md:grid-cols-5'>
            {palette && palette.map((color, index) => (
                <ColorGenerator key={index} color={color} />
            ))}
        </section>
    )
}
