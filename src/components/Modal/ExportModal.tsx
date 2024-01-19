import { Modal, ModalBody, ModalContent, ModalHeader, Snippet } from '@nextui-org/react'
import { Icons } from '..'

interface Props {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    options?: React.ReactNode
}

export function ExportModal({ isOpen, onClose, children, options }: Props) {
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
                    <aside className='flex flex-row sm:flex-col flex-wrap gap-2'>
                        {options}
                    </aside>
                    <div className='w-full h-full flex'>
                        <Snippet
                            hideSymbol
                            copyIcon={<Icons.Copy />}
                            className='w-full h-full text-base overflow-auto'
                        >
                            {children}
                        </Snippet>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}