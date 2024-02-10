import { SHADES } from '@/constants'
import { ColorItem } from '.'

interface Palette {
    name: string
    colors: { hex: string }[]
}

interface PaletteRowProps {
    palette: Palette
    setColors: (name: string, shade?: number) => void
}

export function PaletteRow({ palette, setColors }: PaletteRowProps) {
    return (
        <div className='w-full flex flex-col justify-between gap-4'>
            <p className='text-sm font-bold uppercase opacity-60'>{palette.name}</p>
            <div className='flex flex-wrap md:flex-nowrap items-center md:justify-between gap-4'>
                {palette.colors.map((color, index) => (
                    <ColorItem
                        key={index}
                        onPress={() => { setColors(palette.name, SHADES[index]) }}
                        backgroundColor={color.hex}
                    >
                        {SHADES[index]}
                    </ColorItem>
                ))}
            </div>
        </div >
    )
}