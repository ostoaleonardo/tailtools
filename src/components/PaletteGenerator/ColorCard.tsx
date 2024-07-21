import { Palette } from '@/types'
import { HoverCard } from '.'

export function ColorCard({ shade, color }: { color: Palette, shade: number }) {
    const { hex, contrast } = color

    return (
        <div
            className='relative lg:h-32 col-span-full lg:col-span-1 flex items-end rounded-xl transition-all'
            style={{ backgroundColor: hex }}
        >
            <HoverCard color={color} />
            <div className='flex flex-col lg:items-center justify-center px-4 py-2'>
                <span
                    className='text-sm'
                    style={{ color: contrast }}
                >
                    {shade}
                </span>
                <span
                    className='text-xs'
                    style={{ color: contrast }}
                >
                    {color.hex}
                </span>
            </div>
        </div>
    )
}
