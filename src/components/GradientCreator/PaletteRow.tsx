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
            <p className='text-sm font-bold text-neutral-700 uppercase'>{palette.name}</p>
            <div className='flex items-center justify-between w-full gap-4'>
                {palette.colors.map((color, index) => (
                    <div
                        key={index}
                        onClick={() => { setColors(palette.name, SHADES[index]) }}
                        className='flex flex-col items-center justify-center cursor-pointer gap-2'
                    >
                        <div key={index} className='w-12 h-12 rounded-lg aspect-square' style={{ backgroundColor: color.hex }} />
                        <span className='text-sm font-semibold text-black/50'>{SHADES[index]}</span>
                    </div>
                ))}
            </div>
        </div >
    )
}