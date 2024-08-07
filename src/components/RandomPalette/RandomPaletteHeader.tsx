import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { ExportModal, ModalButton } from '../Modal'
import { CodeToExport } from '../UI'
import { getColorsCode } from '@/utils'
import { Export, Loader } from '@/icons'

const BUTTONS = [
    {
        name: 'Tailwind CSS (Hex)',
        tech: 'tailwind-hex'
    },
    {
        name: 'CSS (Hex)',
        tech: 'css-hex'
    },
    {
        name: 'CSS (RGB)',
        tech: 'css-rgb'
    }
]

interface Props {
    palette: any[]
    getPalette: () => Promise<void>
    isLoading: boolean
}

export function RandomPaletteHeader({ palette, getPalette, isLoading }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('tailwind-hex')
    const [code, setCode] = useState('')

    const handleOpen = () => setIsOpen(!isOpen)

    useEffect(() => {
        const code = getColorsCode(active, palette)
        setCode(code)
    }, [active, palette])

    return (
        <>
            <header className='w-full h-14 flex items-center justify-center bg-titan-white dark:bg-zinc-900 border-y-black/5 dark:border-y-white/10 border-y-1 transition-all z-10'>
                <div className='max-w-[95%] md:max-w-[97%] w-full flex items-center justify-between'>
                    <div className='hidden sm:flex flex-row items-center justify-center gap-2'>
                        <h2 className='text-sm md:text-base font-medium line-clamp-1'>
                            Press the spacebar to generate a new palette
                        </h2>
                        {isLoading && <Loader className='animate-spin' />}
                    </div>
                    <Button
                        variant='flat'
                        onClick={getPalette}
                        isLoading={isLoading}
                        className='visible sm:hidden'
                    >
                        Generate
                    </Button>
                    <div className='flex items-center justify-center gap-2'>
                        <Button
                            variant='light'
                            onClick={handleOpen}
                            startContent={<Export />}
                        >
                            Export
                        </Button>
                    </div>
                </div>
            </header>

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
                <CodeToExport code={code} />
            </ExportModal>
        </>
    )
}
