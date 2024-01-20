export const getColorsCode = (tech: string, palette: any[]) => {
    let code = ''

    switch (tech) {
        case 'tailwind-hex':
            code += 'colors {\n'
            palette.forEach(({ name, hex }) => {
                name = name.replace(/ /g, '-').toLowerCase()
                code += '\'' + name + '\'' + ': \'' + hex + '\',\n'
            })
            code += '}'
            break
        case 'css-hex':
            code += ':root {\n'
            palette.forEach(({ name, hex }) => {
                name = name.replace(/ /g, '-').toLowerCase()
                code += '\t--' + name + ': ' + hex + ';\n'
            })
            code += '}'
            break
        default:
            break
    }

    return code
}