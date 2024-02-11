import { Tab, Tabs } from '@nextui-org/react'

const TABS = ['buttons', 'cards', 'patterns', 'backgrounds', 'texts']

interface Props {
    selected: string
}

export function SectionTabs({ selected }: Props) {
    return (
        <section className='sticky top-[10%] z-20 mb-44'>
            <Tabs
                radius='full'
                color='primary'
                variant='bordered'
                aria-label='Components Tabs'
                selectedKey={selected}
                classNames={{
                    base: 'bg-titan-white dark:bg-zinc-900 rounded-full transition-all',
                    cursor: 'bg-gradient-to-tl from-foreground to-slate-400',
                    tabContent: 'text-xs sm:text-sm group-data-[selected=true]:text-white group-data-[selected=true]:dark:text-black text-foreground transition-all',
                }}
            >
                {TABS.map((tab) => (
                    <Tab
                        key={tab}
                        title={tab}
                        href={`#${tab}`}
                        className='capitalize'
                    />
                ))}
            </Tabs>
        </section>
    )
}