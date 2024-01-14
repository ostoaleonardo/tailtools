interface Colors {
    from: string
    to: string
}

export function GradientPicker({ colors }: { colors: Colors }) {
    return (
        <div className='w-full flex items-center'>
            <div className={`relative w-full h-4/6 bg-gradient-to-r ${colors.from} ${colors.to} border-zinc-950 dark:border-titan-white max-md:border-4 border-[12px] rounded-r-3xl transition-all`} />
        </div>
    )
}