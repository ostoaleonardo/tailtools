export function GlowingBorderCard() {
    return (
        <article className='w-full max-w-96 flex items-center justify-center rounded-lg overflow-hidden group'>
            <div className='relative w-full flex items-center justify-center p-[0.1rem]'>
                <div className='absolute inset-0 flex items-center bg-black/5 dark:bg-white/5'>
                    <div className='h-[100cqw] w-[100cqw] bg-[conic-gradient(from_0_at_50%_50%,rgb(51,65,85)_0deg,transparent_60deg,transparent_300deg,rgb(51,65,85)_360deg)] dark:bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 group-hover:opacity-100 animate-spin transition-all' />
                </div>
                <div className='w-full h-full bg-gradient-to-r from-slate-300 dark:from-zinc-900 to-slate-200 dark:to-zinc-800 group-hover:to-slate-100 group-hover:dark:to-zinc-700 rounded-lg transition-all p-6 z-10'>
                    <h2 className='bg-gradient-to-b from-slate-700 dark:from-zinc-500 to-slate-500 dark:to-zinc-300 bg-clip-text text-xl font-medium text-transparent'>
                        Glowing Border Card
                    </h2>
                    <p className='text-sm text-slate-700 dark:text-white opacity-80 mb-4'>
                        A card with a glowing border on hover.
                    </p>
                    <button className='text-xs text-slate-700/50 dark:text-white/50 hover:text-slate-700 hover:dark:text-white bg-slate-700/5 dark:bg-white/5 rounded-md hover:bg-slate-700/20 hover:dark:bg-white/20 transition-all cursor-pointer select-none py-1 px-2'>
                        Learn More
                    </button>
                </div>
            </div>
        </article>
    )
}
