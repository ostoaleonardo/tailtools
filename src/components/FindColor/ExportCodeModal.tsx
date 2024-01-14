import { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalContent, ModalHeader, Snippet } from '@nextui-org/react'
import { Icons } from '..'
import { useColor } from '../../hooks'
import { getCodeToExport } from '../../utils'

interface TechButtonProps {
    active: string
    setActive: (value: string) => void
    tech: string
    children: React.ReactNode
}

function TechButton({ active, setActive, tech, children }: TechButtonProps) {
    return (
        <Button
            className='min-w-max flex-1 sm:flex-none'
            onClick={() => setActive(tech)}
            variant={active === tech ? 'solid' : 'light'}
        >
            {children}
        </Button>
    )
}

export function ExportCodeModal({ isOpen, onClose, palette }: { isOpen: boolean, onClose: () => void, palette: any[] }) {
    const [active, setActive] = useState('tailwind-hex')
    const [code, setCode] = useState('')
    const { color } = useColor()

    useEffect(() => {
        const colorName = color.name.toLowerCase().replace(' ', '-')
        const code = getCodeToExport(active, colorName, palette)
        setCode(code)
    }, [active, palette])

    return (
        <Modal
            size='3xl'
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalContent>
                <ModalHeader className='flex flex-col gap-1'>
                    Export code
                </ModalHeader>
                <ModalBody className='flex sm:flex-row mb-4'>
                    <div className='flex flex-row sm:flex-col flex-wrap gap-2'>
                        <TechButton
                            active={active}
                            setActive={setActive}
                            tech='tailwind-hex'
                        >
                            Tailwind CSS (Hex)
                        </TechButton>
                        <TechButton
                            active={active}
                            setActive={setActive}
                            tech='css-hex'
                        >
                            CSS (Hex)
                        </TechButton>
                    </div>
                    <div className='w-full h-full flex'>
                        <Snippet
                            hideSymbol
                            copyIcon={<Icons.Copy />}
                            className='w-full h-full text-base overflow-auto'
                        >
                            {code.split('\n')
                                .map((line, index) => (
                                    <span
                                        key={index}
                                        className={`flex text-xs sm:text-sm font-console ${line.includes('#') && 'indent-10'}`}
                                    >
                                        {line}
                                    </span>
                                ))}
                        </Snippet>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}