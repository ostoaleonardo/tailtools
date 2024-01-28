import { NavbarMenuItem } from '@nextui-org/react'
import { NavMenuRoute } from '.'

interface Props {
    name: string
    routes: { path: string, name: string, description: string }[]
    activeColor?: string
}

export function NavMenuItem({ name, routes }: Props) {
    return (
        <NavbarMenuItem className='relative w-[80%] flex flex-col items-centerr justify-center bg-white/5 rounded-xl p-4 group'>
            <div className='absolute -top-4 -left-4 text-white text-2xl font-bold'>
                {name}
            </div>
            <div className='flex flex-col justify-center overflow-hidden transition-all pt-2 gap-2'>
                {routes.map((route, index) => <NavMenuRoute key={index} route={route} />)}
            </div>
        </NavbarMenuItem>
    )
}
