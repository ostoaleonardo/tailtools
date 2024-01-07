import { createContext, useState } from 'react'

export const ColorContext = createContext({} as any)

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
    const [color, setColor] = useState('5b21b6')
    const [contrast, setContrast] = useState('000000')

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