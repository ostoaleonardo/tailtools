import { Button, ScrollShadow } from '@nextui-org/react'
import { Icons } from '..'

interface Props {
    shadow: any
    setShadow: (shadow: any) => void
    currentLayer: number
    setCurrentLayer: (layer: number) => void
}

export function ShadowLayers({ shadow, setShadow, currentLayer, setCurrentLayer }: Props) {
    const handleAddLayer = () => {
        setShadow([
            ...shadow,
            {
                x: 0,
                y: 16,
                blur: 16,
                spread: 0,
                color: '#0000004d',
                inset: 'false'
            }
        ])
        setCurrentLayer(shadow.length)
    }

    const handleRemoveLayer = () => {
        if (shadow.length === 1) return

        const newShadow = shadow.filter((_: any, index: number) => index !== currentLayer)
        setShadow(newShadow)
        setCurrentLayer(currentLayer === 0 ? 0 : currentLayer - 1)
    }

    return (
        <div className='flex flex-col items-center bg-slate-300 dark:bg-zinc-800 rounded-2xl py-8 gap-8'>
            <div className='w-full flex flex-col px-8 gap-1'>
                <h2 className='text-3xl font-bold'>Layers</h2>
                <p className='text-sm lg:text-base'>Add layers for your shadow.</p>
            </div>
            <div className='w-full flex flex-row items-center justify-between px-8'>
                <Button
                    variant='faded'
                    onClick={handleAddLayer}
                    startContent={<Icons.Add />}
                >
                    Add
                </Button>
                <Button
                    variant='faded'
                    isDisabled={shadow.length === 1}
                    onClick={handleRemoveLayer}
                    startContent={<Icons.Close />}
                >
                    Remove
                </Button>
            </div>
            <ScrollShadow
                hideScrollBar
                className='w-full h-96 overflow-y-auto px-8'
            >
                <div className='w-full flex flex-col items-center justify-center gap-4'>
                    {shadow.map((_: any, index: number) => (
                        <Button
                            key={index}
                            variant='faded'
                            className={`w-full ${currentLayer === index ? 'bg-neutral-800 dark:bg-slate-300 text-white dark:text-black' : ''} transition-all`}
                            onClick={() => setCurrentLayer(index)}
                        >
                            Layer {index + 1}
                        </Button>
                    ))}
                </div>
            </ScrollShadow>
        </div>
    )
}