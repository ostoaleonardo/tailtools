import { HeroBackground } from '.'

export function HeroComponents() {
    return (
        <header className='w-full flex flex-col items-center justify-center'>
            <HeroBackground />
            <div className='w-full flex flex-col items-center justify-center pt-40 gap-4'>
                <h1 className='text-5xl sm:text-7xl font-bold text-center bg-gradient-to-tl from-foreground to-slate-400 bg-clip-text text-transparent'>
                    Tailtools
                    <br />
                    Components
                </h1>
                <p className='w-full sm:w-2/3 lg:w-2/5 text-sm sm:text-lg text-center text-pretty transition-all mb-8 px-8'>
                    Beautifully collection of unique components built with Tailwind CSS that you only need to copy and paste.
                </p>
            </div>
        </header>
    )
}