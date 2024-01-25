interface Props {
    onPress?: () => void
}

export function GridElementInactive({ onPress }: Props) {
    return (
        <div
            onClick={onPress}
            className='w-full h-full bg-slate-200 dark:bg-zinc-700 active:bg-slate-300 active:dark:bg-zinc-800 border-zinc-700/10 hover:border-zinc-700/50 dark:border-white/10 hover:dark:border-white/50 hover:scale-105 border-2 rounded-lg cursor-pointer transition-all'
        >
            <div className='w-full h-full flex items-center justify-center'>
                <p className='text-slate-900/30 dark:text-zinc-100/30'>+</p>
            </div>
        </div>
    )
}