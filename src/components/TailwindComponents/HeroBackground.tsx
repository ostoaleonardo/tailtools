export function HeroBackground() {
    return (
        <div className='absolute w-full h-full overflow-hidden z-0'>
            <svg
                aria-hidden='true'
                className='w-screen h-full stroke-black/10 dark:stroke-white/10 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] skew-y-12'>
                <defs>
                    <pattern id=':S1:' width='80' height='80' patternUnits='userSpaceOnUse' x='-1' y='-1'>
                        <path d='M.5 80V.5H80' fill='none' stroke-dasharray='0' />
                    </pattern>
                </defs>
                <rect width='100%' height='100%' stroke-width='0' fill='url(#:S1:)' />
            </svg>
        </div>
    )
}
