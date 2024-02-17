export function GlowingBorderButton() {
    return (
        <button className='relative flex items-center justify-center rounded-full overflow-hidden p-[0.1rem] group'>
            <div className='absolute bg-black/5 dark:bg-white/5'>
                <div className='w-[100cqw] h-[100cqw] bg-[conic-gradient(from_0_at_50%_50%,rgb(51,65,85)_0deg,transparent_60deg,transparent_300deg,rgb(51,65,85)_360deg)] dark:bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-all' />
            </div>
            <div className='bg-gradient-to-b from-slate-300 dark:from-zinc-900 to-slate-200 dark:to-zinc-800 group-hover:to-slate-100 group-hover:dark:to-zinc-700 rounded-full transition-all px-6 py-3 z-10'>
                <span className='bg-gradient-to-b from-slate-700 dark:from-zinc-500 to-slate-500 dark:to-zinc-300 bg-clip-text text-transparent font-medium'>
                    Glowing Border Button
                </span>
            </div>
        </button>
    )
}
