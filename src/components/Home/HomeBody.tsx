import { useEffect, useState } from 'react'
import { CircleButton, CodeWindow } from '.'
import { getCodeToExport } from '../../utils'
import { PALETTES } from '../../constants'

interface Palette {
    name: string
    colors: { hex: string }[]
}

export function HomeBody() {
    const [code, setCode] = useState('')
    const [isSelected, setIsSelected] = useState(0)
    
    const gradiantVariants: Record<number, string> = {
        0: 'from-blue-500 to-blue-600',
        1: 'from-violet-500 to-violet-600',
        2: 'from-pink-500 to-pink-600',
    }

    useEffect(() => {
        generateCode(PALETTES[0])
    }, [])

    const generateCode = (palette: Palette, index?: number) => {
        const code = getCodeToExport('tailwind-hex', palette.name, palette.colors)
        setCode(code)
        setIsSelected(index || 0)
    }

    return (
        <main className='w-full h-[calc(100vh_-_64px)] flex items-center justify-center bg-gradient-to-b from-zinc-950 to-zinc-950'>
            <div className='w-1/3 flex flex-col justify-center'>
                <h1 className='text-7xl font-bold'>
                    Generate your own&nbsp;
                    <span className={`text-transparent bg-clip-text bg-gradient-to-b ${gradiantVariants[isSelected]} transition-all`}>
                        Palettes
                    </span>
                </h1>
                <p className='text-white/80 text-xl mt-4'>
                    The easiest way to generate your own palettes for Tailwind CSS
                </p>
                <div className='mt-8 flex gap-4'>
                    {PALETTES.slice(12, 14).map((palette, index) => (
                        <CircleButton
                            key={index}
                            palette={palette}
                            isSelected={isSelected === index}
                            onPress={() => { generateCode(palette, index) }}
                        />
                    ))}
                </div>
            </div>
            <div className='w-1/2 flex flex-col items-end justify-center'>
                <CodeWindow code={code} />
            </div>
        </main >
    )
}