import { SHADES } from '../constants'

export const getPaletteCode = (tech: string, colorName: string, palette: any[]) => {
    let code = ''
    const name = colorName.replace(/ /g, '-').toLowerCase()

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
                code += '\t--' + name + '-' + SHADES[index] + ': ' + color.hex + ';\n'
            })
            code += '}'
            break
        case 'css-rgb':
            code += ':root {\n'
            palette.forEach((color, index) => {
                code += '\t--' + name + '-' + SHADES[index] + ': ' + color.rgb.join(', ') + ';\n'
            })
            code += '}'
            break
        default:
            break
    }

    return code
}
