import { Icons } from ".."

interface Props {
    item: number | string
    onPress?: () => void
}

export function GridElementActive({ item, onPress }: Props) {
    return (
        <div className='relative w-full h-full bg-slate-300 dark:bg-zinc-800 active:bg-slate-400 active:dark:bg-zinc-900 border-zinc-700/10 hover:border-zinc-700/50 dark:border-white/10 hover:dark:border-white/50 hover:scale-105 border-2 rounded-lg transition-all'>
            <div
                onClick={onPress}
                className='absolute top-0 right-0 hover:bg-white/5 rounded-bl-lg cursor-pointer p-2'
            >
                <Icons.Close />
            </div>
            <div className='w-full h-full flex items-center justify-center'>
                <p className='text-slate-100'>{item}</p>
            </div>
        </div>
    )
}