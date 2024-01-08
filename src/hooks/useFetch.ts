import { useColor } from './useColor.ts'

const COLOR_API = 'https://www.thecolorapi.com/id?hex='
const SCHEME_API = 'https://www.thecolorapi.com/scheme?hex='

export function useFetch() {
    const { setColor, setContrast } = useColor()

    const fetchColor = async (color: string) => {
        color = color.replace('#', '')

        const res = await fetch(
            `${COLOR_API}${color}`
        )

        const data = await res.json()
        
        setColor({ name: data.name.value, hex: data.hex.value })
        setContrast(data.contrast.value)
    }

    // Generate a palette of 11 colors, from the base color
    const generatePalette = async (color: string, mode='monochrome', count = 11) => {
        color = color.replace('#', '')

        const res = await fetch(
            `${SCHEME_API}${color}&mode=${mode}&count=${count}`
        )

        const data = await res.json()
        const colors = data.colors

        const palette = colors.map((color: any) => {
            return {
                name: color.name.value,
                hex: color.hex.value,
                contrast: color.contrast.value
            }
        })

        return palette.reverse()
    }

    return {
        fetchColor,
        generatePalette
    }
}