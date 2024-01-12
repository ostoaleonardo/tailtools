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
        <main className='w-full h-[calc(100vh_-_64px)] flex flex-col items-center justify-center bg-gradient-to-b from-black to-zinc-950'>
            <div className='w-full max-w-7xl flex flex-col z-10'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h1 className='flex flex-col text-8xl font-bold gap-0'>
                        <span className='flex text-white font-syne uppercase gap-10'>
                            Create,
                            <Palette
                                colors={[
                                    palette.colors[0]?.hex,
                                    palette.colors[4]?.hex,
                                    palette.colors[8]?.hex,
                                ]}
                            />
                        </span>
                        <span className='flex text-white font-syne uppercase gap-10'>
                            <GradientPicker
                                colors={{
                                    from: {
                                        tailwind: (TAILWIND_CLASSES as any)[palette.name][100].from,
                                        hex: palette.colors[1]?.hex,
                                    },
                                    to: {
                                        tailwind: (TAILWIND_CLASSES as any)[palette.name][700].to,
                                        hex: palette.colors[7]?.hex,
                                    },
                                }}
                            />
                            Design,
                        </span>
                        <span className='flex items-center gap-10'>
                            <span className={`font-syne text-transparent bg-clip-text bg-gradient-to-r ${(TAILWIND_CLASSES as any)[palette.name][50].from} ${(TAILWIND_CLASSES as any)[palette.name][700].to} uppercase transition-all`}>
                                Tailtools
                            </span>
                            <RandomPaletteButton
                                setCode={setCode}
                                setPalette={setPalette}
                            />
                        </span>
                    </h1>
                    <p className='text-slate-300 text-xl mt-8'>
                        A collection of tools to help you create and design with Tailwind CSS.
                    </p>
                </div>
            </div>
            <div className='absolute right-0 w-1/3 h-full flex items-center bg-gradient-to-l from-slate-800 to-transparent z-0'>
                <CodeWindow
                    code={code}
                    colorTitle={titleColor}
                />
            </div>
        </main>
    )
}