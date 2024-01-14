import { Link, useLocation } from 'react-router-dom'
import { NavbarMenuItem } from '@nextui-org/react'

export function NavMenuItem({ href, name }: { href: string, name: string }) {
    const location = useLocation()
    const isActive = location.pathname === href

    return (
        <NavbarMenuItem className='relative'>
            <Link to={href} className='text-base text-white font-syne uppercase'>
                {name}
            </Link>
            {isActive && (
                <div
                    className='absolute -bottom-2 w-full h-0.5 bg-white'
                />
            )}
        </NavbarMenuItem>
    )
}