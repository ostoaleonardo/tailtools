export interface Palette {
    shade: number
    hex: string
    rgb: number[]
    contrast: string
}

export interface Component {
    title: string
    description: string
    component: () => JSX.Element
    preview: string
    code: string
}
