import { Button } from '@nextui-org/react'
import { Icons } from '..'

export function GeneratorHeader() {
    return (
        <header className='absolute top-[64px] w-full h-14 flex items-center justify-center bg-titan-white dark:bg-zinc-900 border-y-black/5 dark:border-y-white/10 border-y-1 transition-all z-10'>
            <div className='max-w-[97%] w-full flex items-center justify-between'>
                <h1 className='tet-base font-medium'>
                    Press the spacebar to generate a new palette
                </h1>
                <div className='flex items-center justify-center gap-2'>
                    <Button
                        variant='light'
                        startContent={<Icons.Export />}
                    >
                        Export
                    </Button>
                    <Button
                        variant='light'
                        startContent={<Icons.Heart />}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </header>
    )
}