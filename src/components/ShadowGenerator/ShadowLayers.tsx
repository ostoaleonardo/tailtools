import { Button } from '@nextui-org/react'

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
                inset: false
            }
        ])
        setCurrentLayer(shadow.length)
    }

    const handleRemoveLayer = () => {
        setShadow([
            ...shadow.slice(0, currentLayer),
            ...shadow.slice(currentLayer + 1)
        ])
        setCurrentLayer(shadow.length - 1)
    }

    return (
        <div className='w-64 min-h-full flex flex-col items-center justify-between bg-slate-300 dark:bg-zinc-800 rounded-2xl py-8 gap-8'>
            <div className='w-full flex flex-col px-8 gap-1'>
                <h2 className='text-3xl font-bold'>Layers</h2>
                <p className='text-sm lg:text-base'>Add layers for your shadow.</p>
            </div>
            <div className='w-full flex flex-row items-center justify-between px-8'>
                <Button
                    variant='faded'
                    onClick={handleAddLayer}
                >
                    Add
                </Button>
                <Button
                    variant='faded'
                    onClick={handleRemoveLayer}
                >
                    Remove
                </Button>
            </div>
            <div className='w-full h-64 flex flex-col items-center overflow-y-auto px-8'>
                <div className='w-full flex flex-col items-center justify-center gap-4'>
                    {shadow.map((_: any, index: number) => (
                        <Button
                            key={index}
                            variant={currentLayer === index ? 'solid' : 'faded'}
                            className='w-full transition-all'
                            onClick={() => setCurrentLayer(index)}
                        >
                            Layer {index + 1}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}