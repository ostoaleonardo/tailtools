import { TitlePattern } from '../../TitlePattern'

export function SkewGridPattern() {
    return (
        <div className='absolute w-[90%] h-[70%] border-2 border-foreground/10 rounded-xl overflow-hidden select-none z-0'>
            <svg
                aria-hidden='true'
                className='absolute inset-0 inset-y-[-30%] w-full h-[200%] stroke-black/10 dark:stroke-white/10 [mask-image:linear-gradient(45deg,transparent_10%,white,transparent_90%)] skew-y-12'>
                <defs>
                    <pattern id=':r1m:' width='45' height='45' patternUnits='userSpaceOnUse' x='-1' y='-1'>
                        <path d='M.5 45V.5H45' fill='none' strokeDasharray='0' />
                    </pattern>
                </defs>
                <rect width='100%' height='100%' strokeWidth='0' fill='url(#:r1m:)' />
            </svg>
            <TitlePattern>
                Skew Grid Pattern
            </TitlePattern>
        </div>
    )
}
