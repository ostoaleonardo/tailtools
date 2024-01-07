import { useEffect, useState } from 'react'
import { useColor } from '../../hooks'

export function ColorPicker({ setInput }: { setInput: (value: string) => void }) {
    const { color } = useColor()
    const [picker, setPicker] = useState(color.hex)

    useEffect(() => {
        if (color !== picker) {
            setPicker(color.hex)
        }
    }, [color])

    const handlePicker = (value: string) => {
        setPicker(value)
        setInput(value)
    }

    return (
        <input
            type='color'
            value={picker}
            onChange={(e) => handlePicker(e.target.value)}
            className='w-10 h-10 bg-transparent rounded-picker overflow-hidden cursor-pointer'
        />
    )
}