import { useState } from 'react'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarContent, NavbarItem } from '@nextui-org/react'
import { ThemeButton, NavItem, NavBrand, NavMenuItem } from '..'
import { useColor, useSEO } from '@/hooks'
import { ROUTES } from '@/constants'


export function Nav() {
    const { color, contrast } = useColor()
    const { path } = useSEO()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isHomePage = path === '/'
    const isPaletteGeneratorPage = path === ROUTES[0].tools[0].path
    const backgroundActiveColor = isPaletteGeneratorPage && color.hex
    const backgroundMenu = isHomePage ? 'dark:bg-zinc-950' : 'dark:bg-zinc-900'
    const textActiveColor = isPaletteGeneratorPage && contrast

    return (
        <Navbar
            maxWidth='2xl'
            isBlurred={false}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`bg-titan-white ${backgroundMenu} transition-all`}
            style={{
                backgroundColor: backgroundActiveColor,
            }}
        >
            <NavbarContent className='sm:hidden' justify='start' style={{ color: textActiveColor }}>
                <NavbarItem>
                    <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className='sm:hidden pr-3' justify='center'>
                <NavbarItem>
                    <NavbarBrand>
                        <NavBrand textActiveColor={textActiveColor} />
                    </NavbarBrand>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                <NavbarItem>
                    <NavbarBrand className='mr-10'>
                        <NavBrand textActiveColor={textActiveColor} />
                    </NavbarBrand>
                </NavbarItem>
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
                <NavbarItem>
                    <ThemeButton />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu
                className={`w-fit bg-titan-white ${backgroundMenu} border-t-1 border-r-1 border-foreground/10 overflow-y-hidden pt-8`}
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
