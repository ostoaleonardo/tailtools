import { useSEO } from '@/hooks'

interface Props {
    route: { path: string, name: string, description: string }
}

export function NavMenuRoute({ route }: Props) {
    const { path } = useSEO()
    const isActive = path === route.path

    return (
        <a
            href={route.path}
            className={`flex flex-col hover:bg-foreground/10 ${isActive && 'bg-foreground/5'} rounded-lg cursor-pointer transition-all px-4 py-2`}
        >
            <h3 className='text-sm text-foreground font-bold capitalize'>{route.name}</h3>
            <span className='text-xs text-foreground/50'>{route.description}</span>
        </a>
    )
}
