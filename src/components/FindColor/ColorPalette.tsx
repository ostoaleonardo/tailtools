import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { ExportModal, ModalButton } from '../Modal'
import { CodeToExport } from '../UI'
import { ColorCard } from '.'
import { Icons } from '..'
import { useColor, useFetch } from '../../hooks'
import { SHADES } from '../../constants'
import { getPaletteCode } from '../../utils'

interface Palette {
    name: string
    hex: string
    contrast: string
}

const BUTTONS = [
    {
        name: 'Tailwind CSS (Hex)',
        tech: 'tailwind-hex'
    },
    {
        name: 'CSS (Hex)',
        tech: 'css-hex'
    }
]

export function ColorPalette() {
    const [palette, setPalette] = useState<Palette[]>([])
    const [active, setActive] = useState('tailwind-hex')
    const [code, setCode] = useState('')
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

    useEffect(() => {
        const colorName = color.name.toLowerCase().replace(' ', '-')
        const code = getPaletteCode(active, colorName, palette)
        setCode(code)
    }, [active, palette])

    const handleOpen = () => setIsOpen(!isOpen)

    return (
        <>
            <section className='w-full flex flex-col items-center justify-center transition-all px-8 py-16'>
                <div className='max-w-5xl w-full flex flex-col'>
                    <div className='w-full flex items-center justify-between mb-4'>
                        <h1 className='text-2xl sm:text-3xl font-bold'>
                            Color Palette
                        </h1>
                        <div className='flex items-center'>
                            <Button
                                variant='light'
                                onClick={handleOpen}
                                startContent={<Icons.Export />}
                            >
                                Export code
                            </Button>
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-11 gap-2'>
                        {palette.map((color, index) => (
                            <ColorCard key={index} shade={SHADES[index]} color={color} />
                        ))}
                    </div>
                </div>
            </section>

            <ExportModal
                isOpen={isOpen}
                onClose={handleOpen}
                options={
                    BUTTONS.map((option, index) => (
                        <ModalButton
                            key={index}
                            active={active}
                            setActive={setActive}
                            tech={option.tech}
                        >
                            {option.name}
                        </ModalButton>
                    ))
                }
            >
                <CodeToExport code={code} />
            </ExportModal>
        </>
    )
}