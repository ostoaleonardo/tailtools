import { HoverColor } from '.'

interface Color {
    name: string
    hex: string
    contrast: string
}

export function ColorGenerator({ color }: { color: Color }) {
    return (
        <div className='relative flex items-center md:items-end md:justify-center p-8 md:p-16' style={{ backgroundColor: color.hex }}>
            <HoverColor color={color} />
            <div className='flex flex-col md:items-center'>
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