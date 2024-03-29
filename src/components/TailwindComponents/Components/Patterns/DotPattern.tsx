import { TitlePattern } from '../../TitlePattern'

export function DotPattern() {
    return (
        <div className='absolute w-[90%] h-[70%] border-2 border-foreground/10 rounded-xl overflow-hidden select-none z-0'>
            <svg className='absolute inset-0 h-full w-full fill-black/10 dark:fill-white/10 [mask-image:radial-gradient(white,transparent_80%)]'>
                <defs>
                    <pattern id='dot-pattern' width='32' height='32' patternUnits='userSpaceOnUse' patternContentUnits='userSpaceOnUse' x='0' y='0'>
                        <circle cx='16' cy='16' r='1.5' />
                    </pattern>
                </defs>
                <rect width='100%' height='100%' strokeWidth='0' fill='url(#dot-pattern)' />
            </svg>
            <TitlePattern>
                Dot Pattern
            </TitlePattern>
        </div>
    )
}
