import { Button } from '@nextui-org/react'
import { Icons } from '..'
import { GRADIENT_CLASSES, SHADES } from '@/constants'

interface Props {
    setColors: (
        colors: {
            from: string,
            via: string,
            to: string
        }
    ) => void
}

export function RandomGradientButton({ setColors }: Props) {
    const getRadomGradient = () => {
        const keys = Object.keys(GRADIENT_CLASSES)
        const randomKey = keys[Math.floor(Math.random() * (keys.length - 1))]
        const randomShade = SHADES[Math.floor(Math.random() * SHADES.length)]

        if (randomKey === 'black' || randomKey === 'white') {
            return GRADIENT_CLASSES[randomKey]
        }

        return GRADIENT_CLASSES[randomKey][randomShade]
    }

    const handleRandomGradient = () => {
        const randomFrom = getRadomGradient()
        const randomVia = getRadomGradient()
        const randomTo = getRadomGradient()

        setColors({
            from: randomFrom.from,
            via: randomVia.via,
            to: randomTo.to
        })
    }

    return (
        <Button
            radius='lg'
            variant='flat'
            className='h-16 bg-slate-200 dark:bg-zinc-800'
            onClick={handleRandomGradient}
            startContent={<Icons.Random />}
        >
            Random Gradient
        </Button>
    )
}