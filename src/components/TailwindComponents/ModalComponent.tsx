import { Modal, ModalBody, ModalContent, ModalHeader, Snippet, Tab, Tabs } from '@nextui-org/react'
import { ComponentCode } from '.'
import { Component } from '@/types'

interface Props {
    isOpen: boolean
    handleOpen: () => void
    active: Component
}

export function ModalComponent({ isOpen, handleOpen, active }: Props) {
    return (
        <Modal
            size='4xl'
            isOpen={isOpen}
            onClose={handleOpen}
            className='bg-titan-white dark:bg-titan-black'
        >
            <ModalContent>
                <ModalHeader className='flex flex-col gap-1'>
                    <h2 className='text-3xl font-bold'>{active.title}</h2>
                    <p className='font-light text-foreground/70'>{active.description}</p>
                </ModalHeader>
                <ModalBody className='flex flex-col'>
                    <Tabs
                        variant='light'
                        aria-label='Options'
                    >
                        <Tab key='component' title='Component'>
                            <div className='relative w-full min-h-96 flex items-center justify-center bg-slate-200 dark:bg-zinc-900 rounded-xl'>
                                <active.component />
                            </div>
                        </Tab>
                        <Tab key='code' title='Code'>
                            <Snippet
                                hideSymbol
                                classNames={{
                                    base: 'relative w-full min-h-96 bg-slate-50 dark:bg-zinc-900 overflow-auto px-8 py-6',
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