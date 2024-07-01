import { Link } from 'react-router-dom'
import { Button } from '@nextui-org/react'
import { useColor, useSEO } from '@/hooks'
import { Github } from '@/icons'
import { ROUTES } from '@/constants'

export function GithubButton() {
    const { contrast } = useColor()
    const { path } = useSEO()
    const iconColor = path === ROUTES[0].tools[0].path && contrast

    return (
        <Button
            as={Link}
            variant='light'
            target='_blank'
            aria-label='Github repository'
            to='https://github.com/ostoaleonardo/tailtools'
            startContent={<Github />}
            style={{ color: iconColor }}
        >
            Github
        </Button>
    )
}
