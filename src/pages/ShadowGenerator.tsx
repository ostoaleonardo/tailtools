import { useEffect, useState } from 'react'
import { ShadowCard, ShadowProperties } from '../components'
import { ShadowCSSCode, ShadowLayers, ShadowTailwindCode } from '../components/ShadowGenerator'

export function ShadowGenerator() {
    const [shadow, setShadow] = useState([
        {
            x: 0,
            y: 16,
            blur: 16,
            spread: 0,
            color: '#0000004d',
            inset: false
        }
    ])
    const [currentLayer, setCurrentLayer] = useState(0)
    const [cssCode, setCssCode] = useState('')
    const [tailwindCode, setTailwindCode] = useState('')

    useEffect(() => {
        setCssCode(`box-shadow: ${shadow.map(({ x, y, blur, spread, color, inset }) => `${x}px ${y}px ${blur}px ${spread}px ${color}${inset ? ' inset' : ''}`).join(', ')};`)
        setTailwindCode(`shadow-[${shadow.map(({ x, y, blur, spread, color, inset }) => `${inset ? 'inset_' : ''}${x}px_${y}px_${blur}px_${spread}px_${color}`).join(', ')}]`)
    }, [shadow])

    return (
        <main className='w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center p-8 gap-8'>
            <div className='w-full h-full flex flex-row items-center justify-between'>
                <ShadowProperties shadow={shadow} setShadow={setShadow} currentLayer={currentLayer} />
                <ShadowCard code={cssCode} />
                <ShadowLayers shadow={shadow} setShadow={setShadow} currentLayer={currentLayer} setCurrentLayer={setCurrentLayer} />
            </div>
            <div className='w-full flex flex-row items-center justify-between gap-8'>
                <ShadowTailwindCode code={tailwindCode} />
                <ShadowCSSCode code={cssCode} />
            </div>
        </main>
    )
}
