import { Tab, Tabs } from '@nextui-org/react'

interface GradientVisualizerProps {
    code: string
    selectedGradient: string
    setSelectedGradient: Function
}

export function GradientVisualizer({ code, selectedGradient, setSelectedGradient }: GradientVisualizerProps) {
    const gradientText = 'bg-clip-text text-transparent'

    return (
        <div className='w-full h-full flex flex-col justify-between gap-4'>
            <Tabs
                variant='light'
                aria-label='Colors'
                selectedKey={selectedGradient}
                onSelectionChange={setSelectedGradient as any}
            >
                <Tab key='background' title='Background' />
                <Tab key='text' title='Text' />
            </Tabs>

            <div className='w-full h-80 flex items-center justify-center border-2 border-black/10 dark:border-white/10 rounded-3xl overflow-hidden'>
                {selectedGradient === 'background' ? <div className={`w-full h-full ${code}`} />
                    : <h1 contentEditable spellCheck={false} className={`text-4xl lg:text-6xl font-bold break-all line-clamp-2 outline-none ${code} ${gradientText}`}>Hello World!</h1>
                }
            </div>
        </div>
    )
}