import { Snippet } from '@nextui-org/react'
import { Icons } from '..'

export function GradientCode({ code }: { code: string }) {
    return (
        <div className='w-full h-16 border-2 border-black/10 dark:border-white/10 rounded-2xl overflow-hidden'>
            <Snippet
                hideSymbol
                variant='bordered'
                copyIcon={<Icons.Copy />}
                className='w-full h-full border-none overflow-x-auto small-scrollbar px-6'
            >
                {code}
            </Snippet>
        </div>
    )
}