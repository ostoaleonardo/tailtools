import { useLocation } from 'react-router-dom'

interface Props {
    route: { path: string, name: string, description: string }
}

export function NavMenuRoute({ route }: Props) {
    const location = useLocation()
    const isActive = location.pathname === route.path

    return (
        <a
            href={route.path}
            className={`flex flex-col hover:bg-white/10 ${isActive && 'bg-white/5'} rounded-lg cursor-pointer transition-all px-4 py-2`}
        >
            <h3 className='text-sm text-white font-bold capitalize'>{route.name}</h3>
            <span className='text-xs text-white/50'>{route.description}</span>
        </a>
    )
}
