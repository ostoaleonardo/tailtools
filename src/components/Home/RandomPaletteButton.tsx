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
            className='max-md:w-28 w-40 flex items-center justify-center rounded-full bg-zinc-950 dark:bg-titan-white transition-all group'
        >
            <span className='flex items-center max-md:text-xs text-sm text-titan-white dark:text-black font-syne uppercase leading-none transition-color max-md:py-2 py-6'>
                Rand
                <div className='w-3 group-hover:w-6 max-md:h-[0.5rem] h-[0.6rem] border-titan-white dark:border-black border-2 rounded-2xl transition-width ' />
                m
            </span>
        </button>
    )
}