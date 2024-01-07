import { useContext, useEffect } from 'react'
import { ColorContext } from '../context/colorContext.tsx'

export function useColor() {
    const { color, setColor, contrast, setContrast } = useContext(ColorContext)

    useEffect(() => {
        const changeColor = () => {
            document.documentElement.style.setProperty('--color-primary', color.hex)
            document.documentElement.style.setProperty('--color-primary-foreground', contrast)
        }
        changeColor()
    }, [color])

    return {
        color,
        setColor,
        contrast,
        setContrast
    }
}