import { Button } from '@nextui-org/react'
import { Icons } from '..'

export function GeneratorHeader() {
    return (
        <header className='absolute top-[64px] w-full h-14 flex items-center justify-center bg-[#FAFAFF] border-x-black/5 border-y-1 transition-all z-10'>
            <div className='max-w-[94rem] w-full flex items-center justify-between'>
                <h1 className='tet-base font-medium text-black'>
                    Press the spacebar to generate a new palette
                </h1>
                <div className='flex items-center justify-center gap-2'>
                    <Button
                        variant='light'
                        className='text-black'
                        startContent={<Icons.Export />}
                    >
                        Export
                    </Button>
                    <Button
                        variant='light'
                        className='text-black'
                        startContent={<Icons.Heart />}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </header>
    )
}