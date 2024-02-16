import { useParams } from 'react-router-dom'
import { TAILWIND_COMPONENTS } from '@/constants'
import { BreadcrumbItem, Breadcrumbs, Snippet, Tab, Tabs } from '@nextui-org/react'

function BreadCrumbs({ component }: { component: string }) {
    return (
        <Breadcrumbs
            size='lg'
            variant='light'
            className='mb-8'
            itemClasses={{
                item: 'data-[current=true]:text-slate-700 data-[current=true]:dark:text-slate-300 transition-all',
            }}
        >
            <BreadcrumbItem
                href='/components'
            >
                Components
            </BreadcrumbItem>
            <BreadcrumbItem>
                {component}
            </BreadcrumbItem>
        </Breadcrumbs>
    )
}

export function Component() {
    const { component } = useParams()
    console.log(component)
    const data = TAILWIND_COMPONENTS
        .flatMap(({ components }) => components)
        .find(({ path }) => path === component)
        || TAILWIND_COMPONENTS[0].components[0]

    return (
        <main className='w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center'>
            <div className='w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl flex flex-col items-center justify-center py-16'>
                <section className='w-full flex flex-col justify-center'>
                    <BreadCrumbs component={data.title} />
                    <h1 className='text-4xl sm:text-5xl font-bold bg-gradient-to-t from-foreground to-slate-400 bg-clip-text text-transparent transition-all'>
                        {data.title}
                    </h1>
                    <p className='text-start text-slate-700 dark:text-slate-200 transition-all mt-4'>
                        {data.description}
                    </p>
                </section>
                <section className='w-full min-h-96 flex flex-col items-center justify-center mt-10'>
                    <Tabs
                        size='lg'
                        variant='underlined'
                        aria-label='Options'
                        classNames={{
                            base: 'w-full h-fit',
                            panel: 'w-full',
                        }}
                    >
                        <Tab key='preview' title='Preview'>
                            <div className='relative w-full min-h-96 flex items-center justify-center bg-slate-200 dark:bg-titan-black rounded-2xl'>
                                <data.component />
                            </div>
                        </Tab>
                        <Tab key='code' title='Code'>
                            <Snippet
                                hideSymbol
                                classNames={{
                                    base: 'relative w-full min-h-96 bg-slate-50 dark:bg-zinc-900 overflow-auto px-8 py-6',
                                    copyButton: 'absolute top-4 right-4 text-white',
                                }}
                            >
                                {data.code}
                            </Snippet>
                        </Tab>
                    </Tabs>
                </section>
            </div>
        </main>
    )
}
