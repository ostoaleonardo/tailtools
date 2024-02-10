import { getColorModel } from '@/utils'
import { useColor } from '.'


const COLOR_API = 'https://www.thecolorapi.com/id?'
const SCHEME_API = 'https://www.thecolorapi.com/scheme?hex='

export function useFetch() {
    const { setColor, setContrast } = useColor()

    const fetchColor = async (color: string, model: string) => {
        const params = new URLSearchParams({
            [model]: color
        })

        const res = await fetch(
            `${COLOR_API}${params}`
        )

        const data = await res.json()
        return data
    }

    const getColor = async (input: string) => {
        const { color, model } = getColorModel(input)
        if (!model) return

        const data = await fetchColor(color, model)

        setColor({ name: data.name.value, hex: data.hex.value })
        setContrast(data.contrast.value)
    }

    const getColorName = async (input: string) => {
        const { color, model } = getColorModel(input)
        if (!model) return

        const data = await fetchColor(color, model)
        return data.name.value
    }

    const generatePalette = async (color: string, mode = 'monochrome', count = 11) => {
        color = color.replace('#', '')

        const res = await fetch(
            `${SCHEME_API}${color}&mode=${mode}&count=${count}`
        )

        const data = await res.json()
        const colors = data.colors

        const palette = colors.map((color: any) => {
            const { rgb } = color

            return {
                name: color.name.value,
                hex: color.hex.value,
                rgb: [rgb.r, rgb.g, rgb.b],
                contrast: color.contrast.value
            }
        })

        return palette.reverse()
    }

    return {
        getColor,
        getColorName,
        generatePalette
    }
}