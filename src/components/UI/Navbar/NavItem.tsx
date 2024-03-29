import { NavbarItem } from '@nextui-org/react'
import { NavHoverRoute } from '.'
import { useSEO } from '@/hooks'
import { ROUTES } from '@/constants'

interface Props {
    name: string
    routes: { path: string, name: string, description: string }[]
    activeColor: string
}

export function NavItem({ name, routes, activeColor }: Props) {
    const { path } = useSEO()
    const isActive = routes.some(route => route.path === path)
    const isPaletteGeneratorPage = path === ROUTES[0].tools[0].path

    return (
        <NavbarItem className='relative h-full flex items-center justify-center select-none group'>
            <div style={{ color: activeColor }}>
                {name}
            </div>
            {isActive && (
                <div
                    style={{ backgroundColor: isPaletteGeneratorPage ? activeColor : 'currentColor' }}
                    className='absolute bottom-3 w-[15%] h-0.5 transition-all'
                />
            )}

            <div className='absolute top-16 hidden group-hover:flex flex-col justify-center bg-titan-white dark:bg-zinc-900 border-dark/10 dark:border-white/10 border-2 rounded-xl gap-2 p-4'>
                {routes.map((route, index) => <NavHoverRoute key={index} route={route} />)}
            </div>
        </NavbarItem>
    )
}
