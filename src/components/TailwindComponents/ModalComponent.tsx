import { Modal, ModalBody, ModalContent, ModalHeader, Tab, Tabs } from '@nextui-org/react'

interface Props {
    isOpen: boolean
    handleOpen: () => void
    active: {
        title: string
        description: string
        component: React.ReactNode
    }
}

export function ModalComponent({ isOpen, handleOpen, active }: Props) {
    return (
        <Modal
            size='3xl'
            isOpen={isOpen}
            onClose={handleOpen}
        >
            <ModalContent>
                <ModalHeader className='flex flex-col gap-1'>
                    <h1 className='text-3xl font-bold'>{active.title}</h1>
                </ModalHeader>
                <ModalBody className='flex flex-col mb-4'>
                    <Tabs
                        variant='light'
                        aria-label='Options'
                    >
                        <Tab key='component' title='Component'>
                            <div className='w-full min-h-96 flex items-center justify-center bg-slate-200 dark:bg-neutral-700 rounded-xl py-4'>
                                {active.component}
                            </div>
                        </Tab>
                        <Tab key='code' title='Code'>
                        </Tab>
                    </Tabs>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}