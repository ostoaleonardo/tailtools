export function DashedGridPattern() {
    return (
        <div className='absolute w-[90%] h-[70%] border-2 border-foreground/10 rounded-xl overflow-hidden select-none z-0'>
            <svg
                aria-hidden='true'
                className='absolute w-full h-full inset-0 stroke-black/10 dark:stroke-white/10 [mask-image:linear-gradient(45deg,transparent_10%,white,transparent_90%)]'>
                <defs>
                    <pattern id=':r1o:' width='45' height='45' patternUnits='userSpaceOnUse' x='-1' y='-1'>
                        <path d='M.5 45V.5H45' fill='none' stroke-dasharray='4 2' />
                    </pattern>
                </defs>
                <rect width='100%' height='100%' stroke-width='0' fill='url(#:r1o:)' />
            </svg>
            <span className='absolute inset-0 flex items-center justify-center font-medium text-2xl bg-gradient-to-t from-foreground to-slate-400 bg-clip-text text-transparent transition-all'>
                Dashed Grid Pattern
            </span>
        </div>
    )
}
