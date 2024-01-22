import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarContent } from '@nextui-org/react'
import { ThemeButton, NavItem, NavMenuItem, LogoNav } from '.'
import { useColor } from '../../hooks'
import { ROUTES } from '../../constants'

export function Nav() {
    const location = useLocation()
    const { color, contrast } = useColor()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isHomePage = location.pathname === '/'
    const isFindPage = location.pathname === ROUTES[0].path
    const backgroundActiveColor = isFindPage && color.hex
    const textActiveColor = isFindPage && contrast

    return (
        <Navbar
            maxWidth='2xl'
            isBlurred={false}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className='bg-titan-white dark:bg-zinc-900 transition-all'
            style={{
                backgroundColor: isHomePage ? 'transparent' : backgroundActiveColor,
                position: isHomePage ? 'absolute' : 'sticky'
            }}
        >
            <NavbarContent className='sm:hidden' justify='start' style={{ color: textActiveColor }}>
                <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
            </NavbarContent>

            <NavbarContent className='sm:hidden pr-3' justify='center'>
                <NavbarBrand>
                    <LogoNav textActiveColor={textActiveColor} />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                <NavbarBrand className='mr-10'>
                    <LogoNav textActiveColor={textActiveColor} />
                </NavbarBrand>
                {ROUTES.map((route, index) => (
                    <NavItem
                        key={index}
                        href={route.path}
                        name={route.name}
                        activeColor={textActiveColor}
                    />
                ))}
            </NavbarContent>

            <NavbarContent justify='end'>
                <ThemeButton />
            </NavbarContent>

            <NavbarMenu
                className='flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm gap-8'
            >
                {ROUTES.map((route, index) => (
                    <NavMenuItem
                        key={index}
                        href={route.path}
                        name={route.name}
                    />
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
