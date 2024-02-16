import { useState } from 'react'
import { ComponentPreview, SectionTabs, ComponentsSection, HeroComponents } from '@/components'
import { TAILWIND_COMPONENTS } from '@/constants'

export function TailwindComponents() {
    const [selected, setSelected] = useState('')

    return (
        <main className='w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center'>
            <HeroComponents />
            <div className='w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl flex flex-col items-center justify-center'>
                <SectionTabs selected={selected} />
                {TAILWIND_COMPONENTS.map(({ title, description, components }, index) => (
                    <ComponentsSection
                        key={index}
                        title={title}
                        description={description}
                        setSelected={setSelected}
                    >
                        {components.map((component, index) => (
                            <ComponentPreview
                                key={index}
                                path={component.path}
                                title={component.title}
                                description={component.description}
                            >
                                {component.preview ? (
                                    <img
                                        src={component.preview}
                                        className='w-full h-full object-cover'
                                    />
                                ) :
                                    <component.component />
                                }
                            </ComponentPreview>
                        ))}
                    </ComponentsSection>
                ))}
            </div>
        </main>
    )
}