import { useLocation } from "react-router-dom"

interface Props {
    route: { path: string, name: string, description: string }
}

export function NavHoverRoute({ route }: Props) {
    const location = useLocation()
    const isActive = location.pathname === route.path

    return (
        <a
            href={route.path}
            className={`flex flex-col hover:bg-black/10 hover:dark:bg-white/10 ${isActive && 'bg-black/5 dark:bg-white/5'} rounded-lg cursor-pointer transition-all px-4 py-2`}
        >
            <h3 className='font-syne uppercase'>{route.name}</h3>
            <span className='text-sm opacity-50'>{route.description}</span>
        </a>
    )
}
