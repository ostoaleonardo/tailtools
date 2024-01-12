export function Palette({ colors }: { colors: string[] }) {
    return (
        <div className='flex items-center'>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className='h-3/4 aspect-square border-white border-4 rounded-3xl shadow-2xl transition-background'
                    style={{ backgroundColor: color, transform: `translateX(-${index * 0.75}rem)` }}
                />
            ))}
        </div>
    )
}