import { Button } from '@nextui-org/react'
import { HeroBackground } from '.'

export function HeroComponents() {
    const handleButtonClick = () => {
        const element = document.getElementById('buttons')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className='w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center'>
            <HeroBackground />
            <div className='w-full max-w-[50%] flex flex-col items-center justify-center gap-4'>
                <h1 className='text-7xl font-bold text-center bg-gradient-to-tl from-foreground to-slate-400 bg-clip-text text-transparent'>
                    Tailtools Components
                </h1>
                <p className='text-lg text-center transition-all'>
                    Beautifully collection of unique components built with Tailwind CSS that you only need to copy and paste.
                </p>
                <Button
                    as={'a'}
                    size='lg'
                    onClick={handleButtonClick}
                    className='bg-slate-800 dark:bg-slate-200 text-white dark:text-black transition-all mt-8'
                >
                    Explore Components
                </Button>
            </div>
        </header>
    )
}