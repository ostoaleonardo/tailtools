import { Snippet } from '@nextui-org/react'
import { Copy } from '@/icons'

export function GradientCode({ code }: { code: string }) {
    return (
        <Snippet
            hideSymbol
            variant='bordered'
            copyIcon={<Copy />}
            classNames={{
                base: 'w-full min-h-16 border-2 border-foreground/10',
                pre: 'w-11/12 text-wrap ml-3',
            }}
        >
            {code}
        </Snippet>
    )
}
