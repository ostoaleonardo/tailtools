export function HomeHeader() {
    return (
        <main className='w-full h-[calc(100vh_-_64px)] flex flex-col items-center justify-center bg-gradient-to-b from-black to-zinc-950'>
            <div className='w-full max-w-6xl flex flex-col justify-center'>
                <h1 className='text-7xl font-bold'>
                    Create, Design,&nbsp;
                    <span className='text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-purple-600'>
                        Tailtools
                    </span>
                </h1>
                <p className='text-2xl mt-4'>
                    A collection of tools to help you create and design with Tailwind CSS
                </p>
            </div>
        </main>
    )
}