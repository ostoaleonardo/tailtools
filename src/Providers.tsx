import { useNavigate } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { ColorProvider } from './context/colorContext'

interface Props {
    children: React.ReactNode
}

export default function Providers({ children }: Props) {
    const navigate = useNavigate()

    return (
        <NextUIProvider navigate={navigate}>
            <ColorProvider>
                {children}
            </ColorProvider>
        </NextUIProvider>
    )
}