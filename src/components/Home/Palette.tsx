export function Palette({ colors }: { colors: string[] }) {
    return (
        <div className='relative flex items-center bg-white/50'>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className='absolute h-3/4 aspect-square border-white border-4 rounded-3xl shadow-2xl transition-background'
                    style={{
                        backgroundColor: color,
                        right: `${index * 3.5}rem`,
                        zIndex: colors.length - index
                    }}
                />
            ))}
        </div>
    )
}