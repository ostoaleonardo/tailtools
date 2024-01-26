import { Button, Tooltip } from '@nextui-org/react'
import { Icons } from '..'

interface Color {
    name: string
    hex: string
    contrast: string
}

export function HoverColor({ color }: { color: Color }) {
    return (
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity gap-2'>
            <Tooltip content='Copy color' placement='left' delay={700}>
                <Button
                    isIconOnly
                    variant='light'
                    style={{ color: color.contrast }}
                    onPress={() => navigator.clipboard.writeText(color.hex)}
                >
                    <Icons.Copy />
                </Button>
            </Tooltip>
        </div>
    )
}