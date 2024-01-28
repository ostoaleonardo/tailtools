import { useEffect, useState } from 'react'
import { CodeWindow, GradientPicker, Palette, RandomPaletteButton } from '.'
import { PALETTES, GRADIENT_CLASSES } from '../../constants'
import { GradientBackground } from './GradientBackground'

export function HeroSection() {
    const [code, setCode] = useState('')
    const [palette, setPalette] = useState(PALETTES[0])
    const [titleColor, setTitleColor] = useState('#FFFFFF')

    useEffect(() => {
        setTitleColor(palette.colors[5]?.hex)
    }, [palette])

    return (
        <main className='w-full h-[calc(100vh_-_64px)] bg-titan-white dark:bg-zinc-950 transition-all overflow-hidden p-8 md:p-16'>
            <div className='relative flex flex-col items-center justify-center rounded-3xl overflow-hidden gap-16 z-20'>
                <div className='flex flex-col xl:flex-row items-center justify-between gap-16 md:gap-24 p-16'>
                    <div className='text-5xl sm:text-7xl md:text-8xl z-10'>
                        <div className='flex justify-between'>
                            <span className='font-bold'>
                                Palettes
                            </span>
                            <Palette
                                colors={[
                                    palette.colors[8]?.hex,
                                    palette.colors[4]?.hex,
                                    palette.colors[0]?.hex,
                                ]}
                            />
                        </div>
                        <div className='flex justify-between leading-none max-md:gap-1 gap-2'>
                            <GradientPicker
                                colors={{
                                    from: GRADIENT_CLASSES[palette.name][50].from,
                                    to: GRADIENT_CLASSES[palette.name][500].to,
                                }}
                            />
                            <span className='font-bold'>
                                Gradients
                            </span>
                        </div>
                        <div className='flex items-center justify-between gap-2 md:gap-10'>
                            <h1 className='font-bold transition-all' style={{ color: titleColor }}>
                                Tailtools
                            </h1>
                            <RandomPaletteButton
                                setCode={setCode}
                                setPalette={setPalette}
                            />
                        </div>
                        <p className='text-sm lg:text-xl opacity-80 mt-6'>
                            A collection of tools to generate code for Tailwind CSS.
                        </p>
                    </div>
                    <CodeWindow
                        code={code}
                        colorTitle={titleColor}
                    />
                </div>
                <GradientBackground
                    color={GRADIENT_CLASSES[palette.name][500].from}
                />
            </div>
        </main>
    )
}