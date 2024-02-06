import { useState } from 'react'
import { ComponentPreview, ComponentsSection, HeroComponents, ModalComponent } from '../components'
import { Component } from '../types'
import { TAILWIND_COMPONENTS } from '../constants'

export function TailwindComponents() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState(TAILWIND_COMPONENTS[0])

    const handleComponent = (component: Component) => () => {
        setActive(component)
        handleOpen()
    }

    const handleOpen = () => setIsOpen(!isOpen)

    return (
        <>
            <main className='w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center'>
                <div className='w-full max-w-[80%]'>
                    <HeroComponents />
                    <ComponentsSection
                        title='Animations'
                        description='Tailwind CSS components with animations.'
                    >
                        {TAILWIND_COMPONENTS.map((component, index) => (
                            <ComponentPreview
                                key={index}
                                title={component.title}
                                description={component.description}
                                handleOpen={handleComponent(component)}
                            >
                                <component.component />
                            </ComponentPreview>
                        ))}
                    </ComponentsSection>
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