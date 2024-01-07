interface Color {
    color: string
    contrast: string
}

export function ColorCard({ shade, color }: { color: Color, shade: number }) {
    return (
        <div className='h-32 col-span-1 flex items-end rounded-xl bg-violet-800 transition-all' style={{ backgroundColor: color.color }}>
            <div className='w-full flex flex-col items-center justify-center py-2'>
                <span className='text-sm font-medium text-white' style={{ color: color.contrast }}>
                    {shade}
                </span>
                <span className='text-xs font-semibold text-white' style={{ color: color.contrast }}>
                    {color.color}
                </span>
            </div>
        </div>
    )
}