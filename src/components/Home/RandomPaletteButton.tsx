import { useEffect } from 'react'
import { getPaletteCode } from '../../utils'
import { PALETTES } from '../../constants'

interface Palette {
    name: string
    colors: { hex: string }[]
}

interface Props {
    setCode: (code: string) => void
    setPalette: (palette: Palette) => void
}

export function RandomPaletteButton({ setCode, setPalette }: Props) {
    useEffect(() => {
        generateCode()
    }, [])

    const generateCode = () => {
        const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)]
        const code = getPaletteCode('tailwind-hex', palette.name, palette.colors)
        setPalette(palette)
        setCode(code)
    }

    return (
        <button
            onClick={generateCode}
            className='max-md:w-28 w-40 flex items-center justify-center rounded-full hover:bg-black hover:dark:bg-white border-4 border-black dark:border-white transition-all group'
        >
            <span className='max-md:text-xs text-sm group-hover:text-white group-hover:dark:text-black font-bold max-md:py-2 py-5'>
                Random
            </span>
        </button>
    )
}