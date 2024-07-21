import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { ExportModal, ModalButton } from '../Modal'
import { CodeToExport } from '../UI'
import { ColorCard } from '.'
import { useColor, usePalette } from '@/hooks'
import { getPaletteCode } from '@/utils'
import { Export } from '@/icons'
import { Palette } from '@/types'
import { SHADES } from '@/constants'

const BUTTONS = [
    {
        name: 'Tailwind CSS (Hex)',
        tech: 'tailwind-hex'
    },
    {
        name: 'CSS (Hex)',
        tech: 'css-hex'
    },
    {
        name: 'CSS (RGB)',
        tech: 'css-rgb'
    }
]

export function ColorPalette() {
    const [palette, setPalette] = useState<Palette[]>([])
    const [active, setActive] = useState('tailwind-hex')
    const [isOpen, setIsOpen] = useState(false)
    const [code, setCode] = useState('')
    const { color } = useColor()
    const { getPaletteFromColor } = usePalette()

    useEffect(() => {
        const palette = getPaletteFromColor(color.hex)
        setPalette(palette)
    }, [color])

    useEffect(() => {
        const code = getPaletteCode(active, color.name, palette)
        setCode(code)
    }, [active, palette])

    const handleOpen = () => setIsOpen(!isOpen)

    return (
        <>
            <section className='w-full flex flex-col items-center justify-center transition-all px-8 py-16'>
                <div className='max-w-5xl w-full'>
                    <div className='w-full flex items-center justify-between mb-4'>
                        <h2 className='text-2xl sm:text-3xl font-bold'>
                            Color Palette
                        </h2>
                        <Button
                            variant='light'
                            onClick={handleOpen}
                            startContent={<Export />}
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
