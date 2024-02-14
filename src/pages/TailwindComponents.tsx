import { useState } from 'react'
import { ComponentPreview, SectionTabs, ComponentsSection, HeroComponents, ModalComponent } from '@/components'
import { TAILWIND_COMPONENTS } from '@/constants'
import { Component } from '@/types'

export function TailwindComponents() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState(TAILWIND_COMPONENTS[0].components[0])
    const [selected, setSelected] = useState('')

    const handleComponent = (component: Component) => () => {
        setActive(component)
        handleOpen()
    }

    const handleOpen = () => setIsOpen(!isOpen)

    return (
        <>
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
                                    title={component.title}
                                    description={component.description}
                                    handleOpen={handleComponent(component)}
                                >
                                    {component.preview ? (
                                        <img
                                            src={component.preview}
                                            className='w-full h-full object-cover bg-white'
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

            <ModalComponent
                isOpen={isOpen}
                handleOpen={handleOpen}
                active={active}
            />
        </>
    )
}