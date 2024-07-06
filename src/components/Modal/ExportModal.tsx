import { Modal, ModalBody, ModalContent, ModalHeader, Snippet } from '@nextui-org/react'
import { Copy } from '@/icons'

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
            className='overflow-hidden'
        >
            <ModalContent>
                <ModalHeader className='flex flex-col gap-1'>
                    Export code
                </ModalHeader>
                <ModalBody className='flex sm:flex-row mb-4'>
                    <aside className='flex flex-row sm:flex-col flex-wrap gap-2'>
                        {options}
                    </aside>
                    <Snippet
                        hideSymbol
                        copyIcon={<Copy />}
                        className='w-full max-w-full overflow-auto'
                    >
                        {children}
                    </Snippet>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
