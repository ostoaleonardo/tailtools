import { HoverColor } from '.'

interface Color {
    name: string
    hex: string
    contrast: string
}

export function ColorGenerator({ color }: { color: Color }) {
    return (
        <div className='relative flex col-span-1 items-center justify-center' style={{ backgroundColor: color.hex }}>
            <HoverColor color={color} />
            <div className='absolute bottom-0 left-0 w-full flex flex-col items-center pb-16'>
                <span className='text-3xl font-bold text-white' style={{ color: color.contrast }}>
                    {color.hex.replace('#', '')}
                </span>
                <span className='text-base font-medium text-white/50' style={{ color: color.contrast }}>
                    {color.name}
                </span>
            </div>
        </div>
    )
}