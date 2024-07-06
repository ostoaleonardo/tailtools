import { useState } from 'react'
import { Button, Tooltip } from '@nextui-org/react'
import { Check, Copy } from '@/icons'

interface Color {
    name: string
    hex: string
    contrast: string
}

export function HoverColor({ color }: { color: Color }) {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(color.hex)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1000)
    }

    return (
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity gap-2'>
            <Tooltip content='Copy color' placement='left' delay={700}>
                <Button
                    isIconOnly
                    variant='light'
                    onPress={handleCopy}
                    style={{ color: color.contrast }}
                >
                    {isCopied ? <Check /> : <Copy />}
                </Button>
            </Tooltip>
        </div>
    )
}
