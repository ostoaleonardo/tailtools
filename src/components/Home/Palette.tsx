function ColorPalette({ color, zIndex, translateClass }: { color: string, zIndex: number, translateClass?: string }) {
    const defaultClasses = 'absolute h-3/4 aspect-square border-zinc-950 dark:border-titan-white max-md:border-4 border-8 rounded-[30%] shadow-2xl transition-all'

    return (
        <div className={`${defaultClasses} ${translateClass}`}
            style={{
                backgroundColor: color,
                zIndex: zIndex,
            }}
        />
    )
}

export function Palette({ colors }: { colors: string[] }) {
    return (
        <div className='relative w-full flex items-center justify-end'>
            <ColorPalette
                color={colors[0]}
                zIndex={3}
            />
            <ColorPalette
                color={colors[1]}
                zIndex={2}
                translateClass='-translate-x-6 md:-translate-x-14'
            />
            <ColorPalette
                color={colors[2]}
                zIndex={1}
                translateClass='-translate-x-12 md:-translate-x-28'
            />
        </div>
    )
}