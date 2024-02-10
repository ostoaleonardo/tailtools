import Color from 'color'
import { Palette } from '@/types'
import { SHADES } from '@/constants'

export function usePalette() {
    const getShade = (color: Color, isDark: boolean, opacity: number) => {
        return isDark
            ? color.mix(Color('black'), opacity).rgb().round()
            : color.mix(Color('white'), opacity).rgb().round()
    }

    const getPaletteFromColor = (baseColor: string) => {
        const palette: Palette[] = []

        for (let opac = 95; opac >= 5; opac -= 25) {
            const color = getShade(Color(baseColor), false, opac / 100)

            palette.push({
                shade: SHADES[palette.length],
                hex: color.hex(),
                rgb: color.rgb().array(),
                contrast: color.isDark() ? 'white' : 'black',
            })
        }

        for (let opac = 5; opac <= 80; opac += 12) {
            const color = getShade(Color(baseColor), true, opac / 100)

            palette.push({
                shade: SHADES[palette.length],
                hex: color.hex(),
                rgb: color.rgb().array(),
                contrast: color.isDark() ? 'white' : 'black',
            })
        }

        return palette
    }

    return {
        getPaletteFromColor
    }
}