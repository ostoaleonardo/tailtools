import { Link, useLocation } from 'react-router-dom'
import { NavbarItem } from '@nextui-org/react'

export function NavItem({ href, name, activeColor }: { href: string, name: string, activeColor: string }) {
    const location = useLocation()
    const isActive = location.pathname === href

    return (
        <NavbarItem className='relative'>
            <Link to={href} style={{ color: activeColor }}>
                {name}
            </Link>
            {isActive && (
                <div
                    style={{ backgroundColor: activeColor }}
                    className='absolute -bottom-2 left-0 right-0 ml-auto mr-auto h-[.15rem] w-3 rounded-full transition-all'
                />
            )}
        </NavbarItem>
    )
}