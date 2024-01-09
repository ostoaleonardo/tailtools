import { Link, useLocation } from 'react-router-dom'
import { NavbarItem } from '@nextui-org/react'
import { useColor } from '../../hooks'

export function NavItem({ href, name }: { href: string, name: string }) {
    const location = useLocation()
    const { contrast } = useColor()
    const isActive = location.pathname === href
    const activeColor = location.pathname === '/create' ? '#000000' : contrast

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