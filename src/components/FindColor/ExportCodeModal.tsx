import { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalContent, ModalHeader, Snippet } from '@nextui-org/react'
import { Icons } from '..'
import { useColor } from '../../hooks'
import { getCodeToExport } from '../../utils'

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
                <ModalBody className='flex flex-row mb-4'>
                    <div className='flex flex-col gap-2'>
                        <Button
                            color='default'
                            onClick={() => setActive('tailwind-hex')}
                            variant={active === 'tailwind-hex' ? 'solid' : 'light'}
                        >
                            Tailwind CSS (Hex)
                        </Button>
                        <Button
                            color='default'
                            onClick={() => setActive('css-hex')}
                            variant={active === 'css-hex' ? 'solid' : 'light'}
                        >
                            CSS (Hex)
                        </Button>
                    </div>
                    <div className='w-full h-full flex'>
                        <Snippet
                            hideSymbol
                            copyIcon={<Icons.Copy />}
                            className='w-full h-full text-base'
                        >
                            {code.split('\n')
                                .map((line, index) => (
                                    <span
                                        key={index}
                                        className={`flex font-console ${line.includes('#') && 'indent-10'}`}
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