import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent } from '@nextui-org/react'
import { NavItem } from '.'
import { useColor } from '../../hooks'
import { ROUTES } from '../../constants'

export function Nav() {
    const location = useLocation()
    const { color, contrast } = useColor()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isCreatePage = location.pathname === '/create'
    const activeColor = isCreatePage ? '#000000' : contrast

    return (
        <Navbar
            maxWidth='xl'
            isBlurred={false}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            style={{ backgroundColor: isCreatePage ? '#FAFAFF' : color.hex }}
            className='transition-all'
        >
            <NavbarContent className='sm:hidden' justify='start'>
                <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
            </NavbarContent>

            <NavbarContent className='sm:hidden pr-3' justify='center'>
                <NavbarBrand>
                    <p className='font-bold text-inherit uppercase' style={{ color: activeColor }}>
                        Tailtools
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                <NavbarBrand className='mr-10'>
                    <p className='font-bold text-inherit uppercase' style={{ color: activeColor }}>
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
