import { useEffect, useState } from 'react'
import { ColorSelectorTabs, GradientCode, GradientCreatorHeader, GradientVisualizer, PaletteRow } from '../components'
import { INITIAL_GRADIENT, PALETTES, TAILWIND_CLASSES } from '../constants'

export function GradientCreator() {
    const [code, setCode] = useState('bg-gradient-to-tr from-slate-600 to-slate-400')
    const gradientText = 'bg-clip-text text-transparent'
    const [direction, setDirection] = useState('bg-gradient-to-t')
    const [via, setVia] = useState('false')
    const [colors, setColors] = useState(INITIAL_GRADIENT)
    const [selectedColor, setSelectedColor] = useState('from')
    const [selectedGradient, setSelectedGradient] = useState('background')

    useEffect(() => {
        setCode(`${direction} ${colors.from} ${via === 'true' ? colors.via + ' ' : ''}${colors.to} ${selectedGradient === 'text' ? gradientText : ''}`)
    }, [direction, via, colors, selectedGradient])

    const setColorsFromPalette = (name: string, shade: number) => {
        setColors({ ...colors, [selectedColor]: (TAILWIND_CLASSES as any)[name][shade][selectedColor] })
    }

    return (
        <main className='w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center px-8 py-8'>
            <div className='max-w-7xl w-full h-full flex flex-col items-center justify-center gap-4'>
                <GradientCreatorHeader
                    setDirection={setDirection}
                    setVia={setVia}
                />
                <div className='w-full flex flex-col xl:flex-row items-center justify-between gap-4'>
                    <GradientVisualizer
                        code={code}
                        selectedGradient={selectedGradient}
                        setSelectedGradient={setSelectedGradient}
                    />
                    <div className='w-full flex flex-col items-center justify-center gap-4'>
                        <ColorSelectorTabs
                            via={via}
                            selectedColor={selectedColor}
                            setSelectedColor={setSelectedColor}
                        />
                        <div className='w-full h-80 border-2 border-black/10 dark:border-white/10 rounded-2xl overflow-y-auto small-scrollbar'>
                            <div className='w-full flex flex-col items-center justify-center gap-10 p-6'>
                                {PALETTES.map((palette, index) => (
                                    <PaletteRow key={index} palette={palette} setColors={setColorsFromPalette} />
                                ))}
                            </div>
                        </div>
                        <GradientCode code={code} />
                    </div>
                </div>
            </div>
        </main>
    )
}
