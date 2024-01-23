export const getColorsCode = (tech: string, palette: any[]) => {
    let code = ''

    switch (tech) {
        case 'tailwind-hex':
            code += 'colors {\n'
            palette.forEach(({ name, hex }) => {
                name = name.replace(' ', '-').toLowerCase()
                code += '\'' + name + '\'' + ': \'' + hex + '\',\n'
            })
            code += '}'
            break
        case 'css-hex':
            code += ':root {\n'
            palette.forEach(({ name, hex }) => {
                name = name.replace(' ', '-').toLowerCase()
                code += '\t--' + name + ': ' + hex + ';\n'
            })
            code += '}'
            break
        case 'css-rgb':
            code += ':root {\n'
            palette.forEach(({ name, rgb }) => {
                name = name.replace(' ', '-').toLowerCase()
                code += '\t--' + name + ': ' + rgb.join(', ') + ';\n'
            })
            code += '}'
            break
        default:
            break
    }

    return code
}