export function GlowingRainbowButton() {
    return (
        <button className='flex items-center justify-center rounded-full transition-all hover:scale-110 overflow-hidden group'>
            <div className='relative flex items-center justify-center p-[0.1rem]'>
                <div className='absolute inset-0 flex items-center bg-white/5'>
                    <div className='w-[100cqw] h-[100cqw] bg-gradient-to-r from-yellow-500 via-violet-500 to-pink-500 animate-spin transition-all' />
                </div>
                <div className='w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-800 group-hover:to-zinc-700 rounded-full transition-all px-6 py-3 z-10'>
                    <span className='text-lg text-white/90'>
                        Glowing Rainbow Button
                    </span>
                </div>
            </div>
        </button>
    )
}
