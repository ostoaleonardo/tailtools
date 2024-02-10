import { Button } from '@nextui-org/react'
import { Icons } from '.'
import { useColor, useSEO, useTheme } from '../../hooks'
import { ROUTES } from '../../constants'

export function ThemeButton() {
    const { theme, toggleTheme } = useTheme()
    const { contrast } = useColor()
    const { path } = useSEO()
    const iconColor = path === ROUTES[0].tools[0].path && contrast

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