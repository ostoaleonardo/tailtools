import { Button } from '@nextui-org/react'

export function HeroComponents() {
    const handleButtonClick = () => {
        const element = document.getElementById('animations')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className='w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center'>
            <div className='w-full max-w-[50%] flex flex-col items-center justify-center gap-4'>
                <h1 className='text-6xl font-bold text-center transition-all'>Tailwind Components</h1>
                <p className='text-lg text-center transition-all'>
                    Beautifully collection of unique components built with Tailwind CSS that you only need to copy and paste.
                </p>
                <Button
                    as={'a'}
                    size='lg'
                    onClick={handleButtonClick}
                    className='bg-gradient-to-r from-blue-600 to-purple-500 text-white mt-8'
                >
                    Explore Components
                </Button>
            </div>
        </header>
    )
}