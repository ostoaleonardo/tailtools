import { Snippet } from '@nextui-org/react'
import { Icons } from '..'

export function GradientCode({ code }: { code: string }) {
    return (
        <Snippet
            hideSymbol
            variant='bordered'
            copyIcon={<Icons.Copy />}
            classNames={{
                base: 'w-full min-h-16 border-2 border-foreground/10',
                pre: 'w-11/12 text-wrap ml-3',
            }}
        >
            {code}
        </Snippet>
    )
}