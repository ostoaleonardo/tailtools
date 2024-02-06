import { Modal, ModalBody, ModalContent, ModalHeader, Snippet, Tab, Tabs } from '@nextui-org/react'
import { ComponentCode } from '.'

interface Props {
    isOpen: boolean
    handleOpen: () => void
    active: {
        title: string
        description: string
        component: () => JSX.Element
        code: string
    }
}

export function ModalComponent({ isOpen, handleOpen, active }: Props) {
    return (
        <Modal
            size='4xl'
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
                            <div className='w-full min-h-96 flex items-center justify-center bg-slate-50 dark:bg-zinc-950/30 rounded-xl'>
                                <active.component />
                            </div>
                        </Tab>
                        <Tab key='code' title='Code'>
                            <Snippet
                                hideSymbol
                                classNames={{
                                    base: 'relative w-full min-h-96 bg-slate-50 dark:bg-zinc-950/30 overflow-auto px-8 py-6',
                                    copyButton: 'absolute top-4 right-4 text-white',
                                }}
                            >
                                <ComponentCode code={active.code} />
                            </Snippet>
                        </Tab>
                    </Tabs>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}