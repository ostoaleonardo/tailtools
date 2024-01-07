import { useState } from 'react'
import { useColor } from '../../hooks'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from '@nextui-org/react'

export function Nav() {
    const { color } = useColor()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        'Home',
    ]

    return (
        <Navbar
            maxWidth='xl'
            isBlurred={false}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            style={{ backgroundColor: '#' + color }}
            classNames={{
                base: 'transition-all'
            }}
        >
            <NavbarContent className='sm:hidden' justify='start'>
                <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
            </NavbarContent>

            <NavbarContent className='sm:hidden pr-3' justify='center'>
                <NavbarBrand>
                    <p className='font-bold text-inherit'>Tailtools</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                <NavbarBrand>
                    <p className='font-bold text-inherit'>Tailtools</p>
                </NavbarBrand>
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link color='foreground' href='#'>
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify='end'>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className='w-full'
                            color={
                                index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'
                            }
                            href='#'
                            size='lg'
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
