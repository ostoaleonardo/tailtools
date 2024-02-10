import { Palette } from '@/types'
import { HoverCard } from '.'

export function ColorCard({ shade, color }: { color: Palette, shade: number }) {
    return (
        <div className='relative lg:h-32 col-span-full lg:col-span-1 flex items-end rounded-xl bg-violet-800 transition-all' style={{ backgroundColor: color.hex }}>
            <HoverCard color={color} />
            <div className='w-full flex flex-col lg:items-center justify-center px-4 py-2'>
                <span className='text-sm font-medium text-white' style={{ color: color.contrast }}>
                    {shade}
                </span>
                <span className='text-xs font-medium text-white' style={{ color: color.contrast }}>
                    {color.hex}
                </span>
            </div>
        </div>
    )
}