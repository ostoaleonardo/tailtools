import { Button } from '@nextui-org/react'

export function ExampleButtons() {
    const variants = ['solid', 'faded', 'bordered', 'light', 'flat', 'ghost', 'shadow'] as const

    return (
        <div className='col-span-full flex flex-wrap items-center justify-center md:justify-between bg-white dark:bg-zinc-500/5 rounded-xl p-10 gap-4'>
            {variants.map((variant, index) => (
                <Button key={index} color='primary' variant={variant} className='capitalize'>
                    {variant}
                </Button>
            ))}
        </div>
    )
}