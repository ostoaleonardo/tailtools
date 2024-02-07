export function GlowingBorderCard() {
    return (
        <article className='w-full max-w-96 flex items-center justify-center rounded-lg overflow-hidden group'>
            <div className='relative w-full flex items-center justify-center p-[0.1rem]'>
                <div className='absolute inset-0 flex items-center bg-white/5'>
                    <div className='h-[100cqw] w-[100cqw] bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 group-hover:opacity-100 animate-spin transition-all' />
                </div>
                <div className='w-full h-full bg-gradient-to-r from-zinc-900 to-zinc-800 group-hover:to-zinc-700 rounded-lg transition-all p-6 z-10'>
                    <h2 className='bg-gradient-to-b from-zinc-500 to-zinc-300 bg-clip-text text-xl font-medium text-transparent'>
                        Glowing Border Card
                    </h2>
                    <p className='text-sm text-white opacity-80 mb-4'>
                        A card with a glowing border on hover.
                    </p>
                    <a className='text-xs text-white/50 hover:text-white bg-white/5 rounded-md hover:bg-white/20 transition-all cursor-pointer select-none py-1 px-2'>
                        Learn More
                    </a>
                </div>
            </div>
        </article>
    )
}
