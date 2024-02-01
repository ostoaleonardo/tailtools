import { useEffect, useState } from 'react'
import { ShadowCard, ShadowProperties } from '../components'
import { ShadowCSSCode, ShadowLayers, ShadowTailwindCode } from '../components/ShadowGenerator'

export function ShadowGenerator() {
    const [shadow, setShadow] = useState({
        x: 0,
        y: 16,
        blur: 16,
        spread: 0,
        color: '#0000004d',
        inset: false
    })
    const [cssCode, setCssCode] = useState('')
    const [tailwindCode, setTailwindCode] = useState('')

    useEffect(() => {
        setCssCode(`box-shadow: ${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color};`)
        setTailwindCode(`shadow-[${shadow.x}px_${shadow.y}px_${shadow.blur}px_${shadow.spread}px_${shadow.color}]`)
    }, [shadow])


    return (
        <main className='w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center p-8 gap-8'>
            <div className='w-full h-full flex flex-row items-center justify-between'>
                <ShadowProperties setShadow={setShadow} />
                <ShadowCard shadow={shadow} />
                <ShadowLayers />
            </div>
            <div className='w-full flex flex-row items-center justify-between gap-8'>
                <ShadowTailwindCode code={tailwindCode} />
                <ShadowCSSCode code={cssCode} />
            </div>
        </main>
    )
}
