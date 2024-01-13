import { Button } from '@nextui-org/react'
import { Icons } from '.'
import { useTheme } from '../../hooks'
import { useLocation } from 'react-router-dom'

export function ThemeButton() {
    const { theme, toggleTheme } = useTheme()
    const location = useLocation()
    const isFindPage = location.pathname === '/find'

    return (
        <Button
            isIconOnly
            variant='light'
            onPress={toggleTheme}
            aria-label='Toggle dark mode'
            className='group text-xl'
        >
            {theme === 'dark'
                ? <Icons.Sun className='group-hover:rotate-90 transition-transform' />
                : <Icons.Moon className='group-hover:-rotate-12 transition-transform' style={{ color: isFindPage && 'white' }} />
            }
        </Button>
    )
}