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
        <main className='w-full h-screen flex flex-col items-center justify-center bg-titan-white dark:bg-zinc-950'>
            <div className='w-full max-w-7xl flex flex-col gap-6 z-10'>
                <div className='w-[62%] flex flex-col items-center'>
                    <div className='w-full flex justify-between'>
                        <span className='text-8xl font-syne uppercase'>
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
                    <div className='w-full flex justify-between gap-2'>
                        <span className='text-8xl font-syne uppercase'>
                            Gra
                        </span>
                        <GradientPicker
                            colors={{
                                from: (TAILWIND_CLASSES as any)[palette.name][50].from,
                                to: (TAILWIND_CLASSES as any)[palette.name][500].to,
                            }}
                        />
                        <span className='text-8xl font-syne uppercase'>
                            ients
                        </span>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <h1 className='text-8xl font-syne uppercase transition-all' style={{ color: titleColor }}>
                            Tailtools
                        </h1>
                        <RandomPaletteButton
                            setCode={setCode}
                            setPalette={setPalette}
                        />
                    </div>
                </div>
                <p className='text-zinc-500 dark:text-slate-300 text-xl'>
                    A collection of tools to help you create and design with Tailwind CSS.
                </p>
            </div>
            <div className='absolute right-0 w-1/3 h-full flex items-center bg-gradient-to-l from-slate-300 dark:from-slate-800 to-transparent transition-all'>
                <CodeWindow
                    code={code}
                    colorTitle={titleColor}
                />
            </div>
        </main>
    )
}