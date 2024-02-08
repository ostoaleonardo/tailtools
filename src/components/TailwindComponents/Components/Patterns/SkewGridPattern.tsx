export function SkewGridPattern() {
    return (
        <div className='absolute w-[90%] h-[70%] border-2 border-foreground/10 rounded-xl overflow-hidden select-none z-0'>
            <svg
                aria-hidden='true'
                className='absolute inset-0 inset-y-[-30%] w-full h-[200%] fill-black/[.1] stroke-black/[.1] dark:fill-white-500/[.1] dark:stroke-white/[.1] [mask-image:linear-gradient(45deg,transparent_10%,white,transparent_90%)] skew-y-12'>
                <defs>
                    <pattern id=':r1m:' width='45' height='45' patternUnits='userSpaceOnUse' x='-1' y='-1'>
                        <path d='M.5 45V.5H45' fill='none' stroke-dasharray='0' />
                    </pattern>
                </defs>
                <rect width='100%' height='100%' stroke-width='0' fill='url(#:r1m:)' />
            </svg>
            <span className='absolute inset-0 flex items-center justify-center font-medium text-2xl bg-gradient-to-br from-slate-50 to-slate-300 bg-clip-text text-transparent'>
                Skew Grid Pattern
            </span>
        </div>
    )
}
