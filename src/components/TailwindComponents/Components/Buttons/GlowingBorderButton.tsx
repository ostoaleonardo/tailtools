export function GlowingBorderButton() {
    return (
        <button className='flex items-center justify-center rounded-full transition-all hover:scale-110 overflow-hidden group'>
            <div className='relative flex items-center justify-center p-[0.1rem]'>
                <div className='absolute inset-0 flex items-center bg-white/5'>
                    <div className='h-[100cqw] w-[100cqw] bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 group-hover:opacity-100 animate-spin transition-all' />
                </div>
                <div className='w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-800 group-hover:to-zinc-700 rounded-full transition-all px-6 py-3 z-10'>
                    <span className='bg-gradient-to-b from-zinc-500 to-zinc-300 bg-clip-text text-lg font-medium text-transparent'>
                        Spotlight Button
                    </span>
                </div>
            </div>
        </button>
    )
}
