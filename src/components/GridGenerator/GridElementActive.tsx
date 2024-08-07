import { Close } from '@/icons'

interface Props {
    item: number | string
    onPress?: () => void
}

export function GridElementActive({ item, onPress }: Props) {
    return (
        <div className='relative w-full h-full bg-slate-300 dark:bg-zinc-800 active:bg-slate-400 active:dark:bg-zinc-900 border-zinc-700/10 hover:border-zinc-700/50 dark:border-white/10 hover:dark:border-white/50 hover:scale-105 border-2 rounded-lg transition-all'>
            <div
                onClick={onPress}
                className='absolute top-0 right-0 hover:bg-black/5 dark:hover:bg-white/5 rounded-bl-lg cursor-pointer p-2'
            >
                <Close />
            </div>
            <div className='w-full h-full flex items-center justify-center'>
                <p className='text-slate-700 dark:text-slate-100 transition-all'>{item}</p>
            </div>
        </div>
    )
}
