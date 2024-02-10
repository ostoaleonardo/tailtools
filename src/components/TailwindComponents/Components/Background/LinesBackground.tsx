export function LinesBackground() {
    return (
        <div className='absolute w-[90%] h-[70%] border-2 border-foreground/10 rounded-xl overflow-hidden select-none z-0'>
            <div className='w-full h-full flex flex-row items-center justify-around'>
                <div className='relative w-[1px] h-full bg-black/5 dark:bg-white/5 overflow-hidden transition-all'>
                    <div className='absolute top-[-50%] w-full h-[20%] bg-[linear-gradient(to_bottom,transparent,black_75%)] dark:bg-[linear-gradient(to_bottom,transparent,white_75%)] animate-[drop-line_7s_2s_infinite]' />
                </div>
                <div className='relative w-[1px] h-full bg-black/5 dark:bg-white/5 overflow-hidden'>
                    <div className='absolute top-[-50%] w-full h-[20%] bg-[linear-gradient(to_bottom,transparent,black_75%)] dark:bg-[linear-gradient(to_bottom,transparent,white_75%)] animate-drop-line' />
                </div>
                <div className='relative w-[1px] h-full bg-black/5 dark:bg-white/5 overflow-hidden'>
                    <div className='absolute top-[-50%] w-full h-[20%] bg-[linear-gradient(to_bottom,transparent,black_75%)] dark:bg-[linear-gradient(to_bottom,transparent,white_75%)] animate-[drop-line_7s_1s_infinite]' />
                </div>
                <div className='relative w-[1px] h-full bg-black/5 dark:bg-white/5 overflow-hidden'>
                    <div className='absolute top-[-50%] w-full h-[20%] bg-[linear-gradient(to_bottom,transparent,black_75%)] dark:bg-[linear-gradient(to_bottom,transparent,white_75%)] animate-[drop-line_7s_2.5s_infinite]' />
                </div>
            </div>
            <span className='absolute inset-0 flex items-center justify-center font-medium text-xl bg-gradient-to-t from-foreground to-slate-400 bg-clip-text text-transparent transition-all'>
                Lines Background
            </span>
        </div >
    )
}
