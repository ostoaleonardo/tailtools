import { SHADES } from '../constants'

export const getPaletteCode = (tech: string, colorName: string, palette: any[]) => {
    let code = ''
    const name = colorName.replace(' ', '-').toLowerCase()

    switch (tech) {
        case 'tailwind-hex':
            code += '\'' + name + '\': {\n'
            palette.forEach((color, index) => {
                code += '\t' + SHADES[index] + ': \'' + color.hex + '\',\n'
            })
            code += '\n},'
            break
        case 'css-hex':
            code += ':root {\n'
            palette.forEach((color, index) => {
                code += '\t--color-primary-' + SHADES[index] + ': \'' + color.hex + '\';\n'
            })
            code += '}'
            break
        default:
            break
    }

    return code
}
