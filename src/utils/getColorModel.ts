const MODELS: any = {
    // #000000 || #000 || 000000 || 000
    hex: /^([0-9a-fA-F]{3}){1,2}$/,
    // 0,71,171 || 0, 71, 171
    rgb: /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)$/,
    // 215,100%,34% || 215, 100%, 34%
    hsl: /^(\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%$/,
    // 100,58,0,33 || 100, 58, 0, 33
    cmyk: /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)$/
}

export const getColorModel = (color: string) => {
    color = color.toLowerCase().replace(/#|rgb|hsl|cmyk|\(|\)/g, '')

    const model = Object.keys(MODELS).find(key => MODELS[key].test(color))

    return { color, model }
}
