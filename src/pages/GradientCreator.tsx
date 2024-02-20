import { useEffect, useState } from 'react'
import { ScrollShadow } from '@nextui-org/react'
import { ColorStopsTabs, GradientCode, GradientCreatorHeader, GradientExamples, GradientVisualizer, OtherColorsRow, PaletteRow, RandomGradientButton } from '@/components'
import { INITIAL_GRADIENT, PALETTES, GRADIENT_CLASSES } from '@/constants'

export function GradientCreator() {
    const [code, setCode] = useState('bg-gradient-to-tr from-slate-600 to-slate-400')
    const [direction, setDirection] = useState('bg-gradient-to-t')
    const [via, setVia] = useState('false')
    const [colors, setColors] = useState(INITIAL_GRADIENT)
    const [colorStop, setColorStop] = useState('from')
    const [selectedGradient, setSelectedGradient] = useState('background')
    const gradientText = 'bg-clip-text text-transparent'

    useEffect(() => {
        const gradient = `${direction} ${colors.from} ${via === 'true' ? colors.via : ''} ${colors.to} ${selectedGradient === 'text' ? gradientText : ''}`
        setCode(gradient.replace(/\s+/g, ' '))
    }, [direction, via, colors, selectedGradient])

    const setGradientValues = (name: string, shade?: number) => {
        if (shade) {
            setColors({ ...colors, [colorStop]: GRADIENT_CLASSES[name][shade][colorStop] })
        } else {
            if (colorStop === 'from' && name === 'transparent') return
            setColors({ ...colors, [colorStop]: GRADIENT_CLASSES[name][colorStop] })
        }
    }

    return (
        <main className='w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center p-8'>
            <section className='max-w-7xl w-full flex flex-col items-center justify-center gap-4'>
                <GradientCreatorHeader
                    setDirection={setDirection}
                    setVia={setVia}
                />
                <div className='w-full flex flex-col xl:flex-row items-center justify-between gap-4'>
                    <div className='w-full flex flex-col gap-4'>
                        <GradientVisualizer
                            code={code}
                            selectedGradient={selectedGradient}
                            setSelectedGradient={setSelectedGradient}
                        />
                        <RandomGradientButton
                            setColors={setColors}
                        />
                    </div>
                    <div className='w-full flex flex-col items-center justify-center gap-4'>
                        <ColorStopsTabs
                            via={via}
                            colorStop={colorStop}
                            setColorStop={setColorStop}
                        />
                        <div className='w-full h-80 border-2 border-black/10 dark:border-white/10 rounded-2xl'>
                            <ScrollShadow
                                hideScrollBar
                                className='w-full h-full overflow-y-auto'
                            >
                                <div className='w-full flex flex-col items-center justify-center gap-10 p-6'>
                                    {PALETTES.map((palette, index) => (
                                        <PaletteRow key={index} palette={palette} setColors={setGradientValues} />
                                    ))}
                                    <OtherColorsRow colorStop={colorStop} setColors={setGradientValues} />
                                </div>
                            </ScrollShadow>
                        </div>
                        <GradientCode code={code} />
                    </div>
                </div>
            </section>
            <GradientExamples />
        </main>
    )
}
