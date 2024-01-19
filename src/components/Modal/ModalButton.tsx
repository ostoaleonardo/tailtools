import { Button } from "@nextui-org/react"

interface TechButtonProps {
    active: string
    setActive: (value: string) => void
    tech: string
    children: React.ReactNode
}

export function ModalButton({ active, setActive, tech, children }: TechButtonProps) {
    return (
        <Button
            className='min-w-max flex-1 sm:flex-none'
            onClick={() => setActive(tech)}
            variant={active === tech ? 'solid' : 'light'}
        >
            {children}
        </Button>
    )
}