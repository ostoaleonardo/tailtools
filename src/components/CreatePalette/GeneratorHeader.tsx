import { Button } from '@nextui-org/react'
import { Icons } from '..'

export function GeneratorHeader() {
    return (
        <header className='w-full h-14 flex items-center justify-center bg-titan-white dark:bg-zinc-900 border-y-black/5 dark:border-y-white/10 border-y-1 transition-all z-10'>
            <div className='max-w-[95%] md:max-w-[97%] w-full flex items-center justify-between'>
                <h1 className='text-sm md:text-base font-medium line-clamp-1'>
                    Press the spacebar to generate a new palette
                </h1>
                <div className='flex items-center justify-center gap-2'>
                    <Button
                        variant='light'
                        startContent={<Icons.Export />}
                    >
                        Export
                    </Button>
                </div>
            </div>
        </header>
    )
}