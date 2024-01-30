import { NavbarMenuItem } from '@nextui-org/react'
import { NavMenuRoute } from '.'

interface Props {
    name: string
    routes: { path: string, name: string, description: string }[]
    activeColor?: string
}

export function NavMenuItem({ name, routes }: Props) {
    return (
        <NavbarMenuItem className='w-full flex flex-col justify-center'>
            <div className='text-foreground/50 text-xs font-medium uppercase'>
                {name}
            </div>
            <div className='flex flex-col justify-center overflow-hidden transition-all pt-2 gap-2'>
                {routes.map((route, index) => <NavMenuRoute key={index} route={route} />)}
            </div>
        </NavbarMenuItem>
    )
}
