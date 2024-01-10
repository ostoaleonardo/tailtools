import { useState } from 'react'
import { Button, Tooltip } from '@nextui-org/react'
import { Icons } from '..'

interface Color {
    name: string
    hex: string
    contrast: string
}

export function HoverCard({ color }: { color: Color }) {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(color.hex)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1000)
    }

    return (
        <div className='absolute w-full h-full opacity-0 hover:opacity-100 transition-opacity'>
            <div className='w-full h-2/3 flex items-center justify-center'>
                <Tooltip content='Copy color' placement='left' delay={700}>
                    <Button
                        isIconOnly
                        variant='light'
                        onPress={handleCopy}
                        style={{ color: color.contrast }}
                    >
                        {isCopied ? <Icons.Check /> : <Icons.Copy />}
                    </Button>
                </Tooltip>
            </div>
        </div >
    )
}