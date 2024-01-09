import { useEffect, useState } from 'react'
import { ColorGenerator } from '.'
import { useFetch } from '../../hooks'
import { getRandomColor } from '../../utils'

export function Generator() {
    const { generatePalette } = useFetch()
    const [palette, setPalette] = useState([])

    useEffect(() => {
        handleGenerate()
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    const handleGenerate = () => {
        const color = getRandomColor()
        getPalette(color)
    }

    const getPalette = async (color: string) => {
        const palette = await generatePalette(color, 'analogic-complement', 5)
        setPalette(palette)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === 'Space') {
            handleGenerate()
        }
    }

    return (
        <section className='w-full h-[calc(100vh_-_64px)] grid grid-cols-5 bg-white'>
            {palette && palette.map((color, index) => (
                <ColorGenerator key={index} color={color} />
            ))}
        </section>
    )
}
