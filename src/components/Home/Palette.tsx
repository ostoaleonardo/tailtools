export function Palette({ colors }: { colors: string[] }) {
    return (
        <div className='relative flex items-center'>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className='absolute h-3/4 aspect-square border-zinc-950 dark:border-titan-white border-8 rounded-3xl shadow-2xl transition-all'
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