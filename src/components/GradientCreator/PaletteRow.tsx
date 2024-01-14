import { SHADES } from '../../constants'

interface Palette {
    name: string
    colors: { hex: string }[]
}

interface PaletteRowProps {
    palette: Palette
    setColors: (name: string, shade: number) => void
}

export function PaletteRow({ palette, setColors }: PaletteRowProps) {
    return (
        <div className='w-full flex flex-col justify-between gap-4'>
            <p className='text-sm font-bold uppercase opacity-60'>{palette.name}</p>
            <div className='flex flex-wrap md:flex-nowrap items-center md:justify-between gap-4'>
                {palette.colors.map((color, index) => (
                    <div
                        key={index}
                        onClick={() => { setColors(palette.name, SHADES[index]) }}
                        className='flex flex-col items-center justify-center cursor-pointer gap-2'
                    >
                        <div key={index} className='w-auto h-10 md:h-12 border-dark/10 dark:border-white/10 border-2 rounded-lg aspect-square' style={{ backgroundColor: color.hex }} />
                        <span className='text-sm font-semibold opacity-50'>{SHADES[index]}</span>
                    </div>
                ))}
            </div>
        </div >
    )
}