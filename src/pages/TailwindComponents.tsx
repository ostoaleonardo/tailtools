import { useState } from 'react'
import { CicleText, ComponentPreview, ComponentsSection, HeroComponents, ModalComponent } from '../components'

const COMPONENTS = [
    {
        title: 'Cicle Text',
        description: 'Text inside a cicle.',
        component: <CicleText />
    }
]

export function TailwindComponents() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState(COMPONENTS[0])

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
                        {COMPONENTS.map((component, index) => (
                            <ComponentPreview
                                key={index}
                                title={component.title}
                                description={component.description}
                                onClick={handleOpen}
                            >
                                {component.component}
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