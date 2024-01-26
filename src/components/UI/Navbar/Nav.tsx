import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarContent } from '@nextui-org/react'
import { ThemeButton, NavItem, NavBrand, NavMenuItem } from '..'
import { useColor } from '../../../hooks'
import { ROUTES } from '../../../constants'

export function Nav() {
    const location = useLocation()
    const { color, contrast } = useColor()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isHomePage = location.pathname === '/'
    const isPaletteGeneratorPage = location.pathname === ROUTES[0].tools[0].path
    const backgroundActiveColor = isPaletteGeneratorPage && color.hex
    const textActiveColor = isPaletteGeneratorPage && contrast

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
                    <NavBrand textActiveColor={textActiveColor} />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                <NavbarBrand className='mr-10'>
                    <NavBrand textActiveColor={textActiveColor} />
                </NavbarBrand>
                {ROUTES.map((route, index) => (
                    <NavItem
                        key={index}
                        name={route.name}
                        routes={route.tools}
                        activeColor={textActiveColor}
                    />
                ))}
            </NavbarContent>

            <NavbarContent justify='end'>
                <ThemeButton />
            </NavbarContent>

            <NavbarMenu
                className='flex items-center justify-center bg-zinc-950/90 backdrop-blur-sm gap-8'
            >
                {ROUTES.map((route, index) => (
                    <NavMenuItem
                        key={index}
                        name={route.name}
                        routes={route.tools}
                        activeColor={textActiveColor}
                    />
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
