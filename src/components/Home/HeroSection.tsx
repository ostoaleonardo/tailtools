import { useEffect, useState } from 'react'
import { CodeWindow, GradientPicker, Palette, RandomPaletteButton } from '.'
import { PALETTES, TAILWIND_CLASSES } from '../../constants'

export function HeroSection() {
    const [code, setCode] = useState('')
    const [palette, setPalette] = useState(PALETTES[0])
    const [titleColor, setTitleColor] = useState('#FFFFFF')

    useEffect(() => {
        setTitleColor(palette.colors[5]?.hex)
    }, [palette])

    return (
        <main className='w-full h-screen flex flex-col items-center justify-center bg-titan-white dark:bg-zinc-950 overflow-hidden'>
            <div className='max-w-7xl flex flex-col lg:flex-row max-lg:mt-64 gap-16 m-16 z-10'>
                <div className='w-full flex flex-col justify-center'>
                    <div className='flex flex-col text-4xl sm:text-6xl md:text-7xl xl:text-8xl uppercase'>
                        <div className='flex justify-between'>
                            <span className='font-syne'>
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
                        <div className='flex justify-between max-md:gap-1 gap-2'>
                            <span className='font-syne'>
                                Gra
                            </span>
                            <GradientPicker
                                colors={{
                                    from: (TAILWIND_CLASSES as any)[palette.name][50].from,
                                    to: (TAILWIND_CLASSES as any)[palette.name][500].to,
                                }}
                            />
                            <span className='font-syne'>
                                ients
                            </span>
                        </div>
                        <div className='flex items-center justify-between gap-2'>
                            <h1 className='font-syne transition-all' style={{ color: titleColor }}>
                                Tailtools
                            </h1>
                            <RandomPaletteButton
                                setCode={setCode}
                                setPalette={setPalette}
                            />
                        </div>
                    </div>
                    <p className='text-sm lg:text-xl opacity-80 mt-6'>
                        A collection of tools to help you create and design with Tailwind CSS.
                    </p>
                </div>
                <CodeWindow
                    code={code}
                    colorTitle={titleColor}
                />
            </div>
            <div className='absolute right-0 w-1/3 h-full bg-gradient-to-l from-slate-300 dark:from-slate-800 to-transparent transition-all' />
        </main>
    )
}