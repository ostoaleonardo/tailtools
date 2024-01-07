import { useEffect, useState } from 'react'
import { useColor, useFetch } from '../../hooks'
import { SHADES } from '../../constants'
import { ColorCard } from '.'
import { Button } from '@nextui-org/react'
import { Icons } from '..'

interface Color {
    color: string
    contrast: string
}

export function ColorPalette() {
    const { color } = useColor()
    const { generatePalette } = useFetch()
    const [palette, setPalette] = useState<Color[]>([])

    useEffect(() => {
        const getPalette = async () => {
            const palette = await generatePalette(color)
            setPalette(palette)
        }

        getPalette()
    }, [color])

    return (
        <section className='w-full flex flex-col items-center justify-center bg-zinc-900 transition-all py-16'>
            <div className='max-w-5xl w-full flex flex-col'>
                <div className='w-full flex items-center justify-between mb-4'>
                    <h1 className='text-3xl font-bold text-neutral-100'>
                        Color Palette
                    </h1>
                    <Button
                        variant='light'
                        startContent={<Icons.Export />}
                        onClick={() => { }}
                    >
                        Export code
                    </Button>
                </div>
                <div className='w-full grid grid-cols-11 gap-2'>
                    {palette.map((color, index) => (
                        <ColorCard key={index} shade={SHADES[index]} color={color} />
                    ))}
                </div>
            </div>
        </section>
    )
}