import { useLocation } from 'react-router-dom'
import { Button } from '@nextui-org/react'
import { Icons } from '.'
import { useColor, useTheme } from '../../hooks'
import { ROUTES } from '../../constants'

export function ThemeButton() {
    const { theme, toggleTheme } = useTheme()
    const { contrast } = useColor()
    const location = useLocation()
    const iconColor = location.pathname === ROUTES[0].path && contrast

    return (
        <Button
            isIconOnly
            variant='light'
            onPress={toggleTheme}
            aria-label='Toggle dark mode'
            className='group text-xl'
        >
            {theme === 'dark'
                ? <Icons.Sun className='group-hover:rotate-90 transition-transform' style={{ color: iconColor }} />
                : <Icons.Moon className='group-hover:-rotate-12 transition-transform' style={{ color: iconColor }} />
            }
        </Button>
    )
}