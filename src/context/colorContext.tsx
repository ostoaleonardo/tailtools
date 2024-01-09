import { createContext, useState } from 'react'

export const ColorContext = createContext({} as any)

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
    const [color, setColor] = useState({ name: 'Cyber Grape', hex: '#4E3870' })
    const [contrast, setContrast] = useState('#FFFFFF')

    return (
        <ColorContext.Provider
            value={{
                color,
                setColor,
                contrast,
                setContrast
            }}
        >
            {children}
        </ColorContext.Provider>
    )
}