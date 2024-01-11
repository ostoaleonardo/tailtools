import { Tab, Tabs } from '@nextui-org/react'

interface ColorSelectorTabsProps {
    selectedColor: string
    setSelectedColor: Function
    via: string
}

export function ColorSelectorTabs({ selectedColor, setSelectedColor, via }: ColorSelectorTabsProps) {
    return (
        <Tabs
            variant='light'
            aria-label='Colors'
            selectedKey={selectedColor}
            onSelectionChange={setSelectedColor as any}
            className='w-full flex justify-end'
        >
            <Tab key='from' title='From' />
            {via === 'true' && <Tab key='via' title='Via' />}
            <Tab key='to' title='To' />
        </Tabs>
    )
}