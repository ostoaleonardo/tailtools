import { Link, useLocation } from 'react-router-dom'
import { NavbarItem } from '@nextui-org/react'
import { ROUTES } from '../../constants'

export function NavItem({ href, name, activeColor }: { href: string, name: string, activeColor: string }) {
    const location = useLocation()
    const isActive = location.pathname === href
    const isFindPage = location.pathname === ROUTES[0].path

    return (
        <NavbarItem className='relative flex justify-center'>
            <Link to={href} style={{ color: activeColor }}>
                {name}
            </Link>
            {isActive && (
                <div
                    style={{ backgroundColor: isFindPage ? activeColor : 'white' }}
                    className='absolute -bottom-2 w-[10%] h-0.5 transition-all'
                />
            )}
        </NavbarItem>
    )
}