export function HeroBackground() {
    return (
        <div className='absolute w-[100%] h-[100%] overflow-hidden z-0'>
            <svg
                aria-hidden='true'
                className='absolute w-screen h-[80%] inset-0 fill-black/[.1] stroke-black/[.1] dark:fill-red-500/[.1] dark:stroke-white/[.1] [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] inset-x-0 skew-y-12'>
                <defs>
                    <pattern id=':S1:' width='80' height='80' patternUnits='userSpaceOnUse' x='-1' y='-1'>
                        <path d='M.5 80V.5H80' fill='none' stroke-dasharray='0'></path>
                    </pattern>
                </defs>
                <rect width='100%' height='100%' stroke-width='0' fill='url(#:S1:)'>
                </rect>
            </svg>
        </div>
    )
}
