import { ColorItem } from '.'

const OTHERS_COLORS = [
    {
        name: 'black',
        hex: '#000000'
    },
    {
        name: 'white',
        hex: '#ffffff'
    },
    {
        name: 'transparent',
        hex: '#00000000'
    }
]

interface GradientValues {
    colorStop: string
    setColors: (name: string, shade?: number) => void
}

export function OtherColorsRow({ colorStop, setColors }: GradientValues) {
    return (
        <div className='w-full flex flex-col justify-between gap-4'>
            <p className='text-sm font-bold uppercase opacity-60'>Others</p>
            <div className='flex flex-wrap md:flex-nowrap items-center gap-4'>
                {OTHERS_COLORS.map((color, index) => (
                    colorStop === 'from' && color.name === 'transparent' ? null : (
                        <ColorItem
                            key={index}
                            onPress={() => { setColors(color.name) }}
                            backgroundColor={color.hex}
                        >
                            {color.name}
                        </ColorItem>
                    )
                ))}
            </div>
        </div >
    )
}