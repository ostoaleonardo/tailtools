import { Tab, Tabs } from '@nextui-org/react'

interface ColorStopsTabsProps {
    via: string
    colorStop: string
    setColorStop: Function
}

export function ColorStopsTabs({ via, colorStop, setColorStop }: ColorStopsTabsProps) {
    return (
        <Tabs
            variant='light'
            aria-label='Colors'
            selectedKey={colorStop}
            onSelectionChange={setColorStop as any}
            className='w-full flex justify-end'
        >
            <Tab key='from' title='From' />
            {via === 'true' && <Tab key='via' title='Via' />}
            <Tab key='to' title='To' />
        </Tabs>
    )
}