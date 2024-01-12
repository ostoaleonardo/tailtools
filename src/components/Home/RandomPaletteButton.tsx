import { useEffect } from "react"
import { getCodeToExport } from "../../utils"
import { PALETTES } from "../../constants"

interface Palette {
    name: string
    colors: { hex: string }[]
}

interface RandomPaletteButtonProps {
    setCode: (code: string) => void
    setPalette: (palette: Palette) => void
}

export function RandomPaletteButton({ setCode, setPalette }: RandomPaletteButtonProps) {
    useEffect(() => {
        generateCode()
    }, [])

    const generateCode = () => {
        const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)]
        const code = getCodeToExport('tailwind-hex', palette.name, palette.colors)
        setPalette(palette)
        setCode(code)
    }

    return (
        <button
            onClick={generateCode}
            className='h-auto flex items-center justify-center rounded-full bg-slate-50'
        >
            <span className='text-black text-sm font-syne uppercase mx-12 my-6'>
                Random
            </span>
        </button>
    )
}