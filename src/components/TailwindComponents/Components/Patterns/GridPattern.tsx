export function GridPattern() {
    return (
        <div className='absolute w-[90%] h-[70%] border-2 border-foreground/10 rounded-xl overflow-hidden select-none z-0'>
            <svg
                aria-hidden='true'
                className='absolute w-full h-[100%] inset-0 fill-black/[.1] stroke-black/[.1] dark:fill-white-500/[.1] dark:stroke-white/[.1] [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] skew-y-12'>
                <rect width='100%' height='100%' stroke-width='0' fill='url(#:S1:)' />
            </svg>
            <span className='absolute inset-0 flex items-center justify-center font-medium text-4xl bg-gradient-to-br from-slate-50 to-slate-300 bg-clip-text text-transparent'>
                Grid Pattern
            </span>
        </div>
    )
}
