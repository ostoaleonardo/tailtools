import { useEffect, useState } from 'react'
import { useColor, useFetch } from '../../hooks'
import { SHADES } from '../../constants'
import { ColorCard, ExportCodeModal } from '.'
import { Button } from '@nextui-org/react'
import { Icons } from '..'

interface Color {
    name: string
    hex: string
    contrast: string
}

export function ColorPalette() {
    const [palette, setPalette] = useState<Color[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const { generatePalette } = useFetch()
    const { color } = useColor()

    useEffect(() => {
        const getPalette = async () => {
            const palette = await generatePalette(color.hex)
            setPalette(palette)
        }

        getPalette()
    }, [color])

    const handleOpen = () => setIsOpen(!isOpen)

    return (
        <>
            <section className='w-full flex flex-col items-center justify-center transition-all py-16'>
                <div className='max-w-5xl w-full flex flex-col'>
                    <div className='w-full flex items-center justify-between mb-4'>
                        <h1 className='text-3xl font-bold'>
                            Color Palette
                        </h1>
                        <Button
                            variant='light'
                            onClick={handleOpen}
                            startContent={<Icons.Export />}
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
            <ExportCodeModal isOpen={isOpen} onClose={handleOpen} palette={palette} />
        </>
    )
}