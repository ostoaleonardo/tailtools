import { Button } from '@nextui-org/react'
import { useColor, useSEO, useTheme } from '@/hooks'
import { ROUTES } from '@/constants'
import { Moon, Sun } from '@/icons'

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
                ? <Sun className='group-hover:rotate-90 transition-transform' style={{ color: iconColor }} />
                : <Moon className='group-hover:-rotate-12 transition-transform' style={{ color: iconColor }} />
            }
        </Button>
    )
}
