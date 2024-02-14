export function GlowingBorderButton() {
    return (
        <a href='#' className='flex items-center justify-center rounded-full transition-all hover:scale-110 overflow-hidden group'>
            <div className='relative flex items-center justify-center p-[0.1rem]'>
                <div className='absolute inset-0 flex items-center bg-black/5 dark:bg-white/5'>
                    <div className='w-[100cqw] h-[100cqw] bg-[conic-gradient(from_0_at_50%_50%,rgb(51,65,85)_0deg,transparent_60deg,transparent_300deg,rgb(51,65,85)_360deg)] dark:bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-100 group-hover:opacity-100 animate-spin transition-all' />
                </div>
                <div className='w-full h-full bg-gradient-to-b from-slate-300 dark:from-zinc-900 to-slate-200 dark:to-zinc-800 group-hover:to-slate-100 group-hover:dark:to-zinc-700 rounded-full transition-all px-6 py-3 z-10'>
                    <span className='bg-gradient-to-b from-slate-700 dark:from-zinc-500 to-slate-500 dark:to-zinc-300 bg-clip-text font-medium text-transparent'>
                        Glowing Border Button
                    </span>
                </div>
            </div>
        </a>
    )
}
