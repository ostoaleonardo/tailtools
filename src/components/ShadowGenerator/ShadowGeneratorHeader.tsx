import { useState } from 'react'
import { Button } from '@nextui-org/react'
import { Icons, ShadowCode } from '..'
import { ExportModal, ModalButton } from '../Modal'

const BUTTONS = [
    { name: 'Tailwind CSS', tech: 'tailwind' },
    { name: 'CSS', tech: 'css' }
]

interface Props {
    cssCode: string
    tailwindCode: string
}

export function ShadowGeneratorHeader({ cssCode, tailwindCode }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('tailwind')

    const handleOpen = () => setIsOpen(!isOpen)

    return (
        <>
            <div className='w-full flex flex-col xl:flex-row items-center justify-between bg-slate-300 dark:bg-zinc-800 rounded-2xl p-8 gap-8'>
                <div className='w-full flex flex-col gap-1'>
                    <h1 className='text-4xl font-bold'>Shadow generator</h1>
                    <p className='text-base lg:text-lg'>Generate shadows for your components.</p>
                </div>
                <div className='w-full flex max-md:flex-wrap items-center justify-end gap-4'>
                    <Button
                        variant='faded'
                        onClick={handleOpen}
                        className='max-md:w-full'
                        startContent={<Icons.Export />}
                    >
                        Export code
                    </Button>
                </div>
            </div>

            <ExportModal
                isOpen={isOpen}
                onClose={handleOpen}
                options={
                    BUTTONS.map((option, index) => (
                        <ModalButton
                            key={index}
                            active={active}
                            setActive={setActive}
                            tech={option.tech}
                        >
                            {option.name}
                        </ModalButton>
                    ))
                }
            >
                <ShadowCode code={active === 'tailwind' ? tailwindCode : cssCode} />
            </ExportModal>
        </>
    )
}
