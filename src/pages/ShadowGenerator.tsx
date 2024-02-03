import { useEffect, useState } from 'react'
import { ShadowCard, ShadowGeneratorHeader, ShadowLayers, ShadowProperties } from '../components'

export function ShadowGenerator() {
    const [shadow, setShadow] = useState([
        {
            x: 0,
            y: 16,
            blur: 16,
            spread: 0,
            color: '#0000004d',
            inset: 'false'
        }
    ])
    const [currentLayer, setCurrentLayer] = useState(0)
    const [cssCode, setCssCode] = useState('')
    const [tailwindCode, setTailwindCode] = useState('')

    useEffect(() => {
        setCssCode(`box-shadow: ${shadow.map(({ x, y, blur, spread, color, inset }) => `${x}px ${y}px ${blur}px ${spread}px ${color}${inset === 'true' ? ' inset' : ''}`).join(', ')};`)
        setTailwindCode(`shadow-[${shadow.map(({ x, y, blur, spread, color, inset }) => `${inset === 'true' ? 'inset_' : ''}${x}px_${y}px_${blur}px_${spread}px_${color}`).join(',')}]`)
    }, [shadow])

    return (
        <main className='w-full min-h-[calc(100vh_-_64px)] grid grid-cols-1 md:grid-cols-5 p-8 gap-6'>
            <ShadowProperties shadow={shadow} setShadow={setShadow} currentLayer={currentLayer} />
            <div className='col-span-full md:col-span-3 max-md:order-first flex flex-col items-center justify-between gap-6'>
                <ShadowGeneratorHeader cssCode={cssCode} tailwindCode={tailwindCode} />
                <div className='w-full h-full flex flex-col items-center justify-center bg-slate-300 dark:bg-zinc-800 rounded-2xl p-8'>
                    <ShadowCard code={cssCode} />
                </div>
            </div>
            <ShadowLayers shadow={shadow} setShadow={setShadow} currentLayer={currentLayer} setCurrentLayer={setCurrentLayer} />
        </main>
    )
}
