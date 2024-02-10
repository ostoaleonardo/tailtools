import { useSEO } from '@/hooks'

interface Props {
    route: { path: string, name: string, description: string }
}

export function NavHoverRoute({ route }: Props) {
    const { path } = useSEO()
    const isActive = path === route.path

    return (
        <a
            href={route.path}
            className={`flex flex-col hover:bg-foreground/10 ${isActive && 'bg-foreground/5'} rounded-lg cursor-pointer transition-all px-4 py-2`}
        >
            <h3 className='font-bold capitalize'>{route.name}</h3>
            <span className='text-sm opacity-50'>{route.description}</span>
        </a>
    )
}
