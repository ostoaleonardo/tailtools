import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem } from '@nextui-org/react'
import { useColor } from '../../hooks'
import { ROUTES } from '../../constants'

function NavItem({ href, name }: { href: string, name: string }) {
    const location = useLocation()
    const { contrast } = useColor()
    const isActive = location.pathname === href

    return (
        <NavbarItem className='relative'>
            <Link to={href} style={{ color: contrast }}>
                {name}
            </Link>
            {isActive && (
                <div
                    style={{ backgroundColor: contrast }}
                    className='absolute -bottom-2 left-0 right-0 ml-auto mr-auto h-[.15rem] w-3 rounded-full transition-all'
                />
            )}
        </NavbarItem>
    )
}

export function Nav() {
    const { color, contrast } = useColor()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <Navbar
            maxWidth='xl'
            isBlurred={false}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            style={{ backgroundColor: color.hex }}
            className='transition-all'
        >
            <NavbarContent className='sm:hidden' justify='start'>
                <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
            </NavbarContent>

            <NavbarContent className='sm:hidden pr-3' justify='center'>
                <NavbarBrand>
                    <p className='font-bold text-inherit uppercase' style={{ color: contrast }}>
                        Tailtools
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                <NavbarBrand className='mr-10'>
                    <p className='font-bold text-inherit uppercase' style={{ color: contrast }}>
                        Tailtools
                    </p>
                </NavbarBrand>
                {ROUTES.map((route, index) => (
                    <NavItem key={index} href={route.path} name={route.name} />
                ))}
            </NavbarContent>

            <NavbarContent justify='end'>
            </NavbarContent>

            <NavbarMenu>
                {ROUTES.map((route, index) => (
                    <NavbarMenuItem key={`${route}-${index}`}>
                        <Link
                            to='#'
                            className='w-full'
                            color={
                                index === 2 ? 'warning' : index === ROUTES.length - 1 ? 'danger' : 'foreground'
                            }
                        >
                            {route.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
