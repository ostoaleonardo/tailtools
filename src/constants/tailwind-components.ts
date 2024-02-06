import { CicleText, GlowingBorderButton } from '../components'

export const TAILWIND_COMPONENTS = [
    {
        title: 'Cicle Text',
        description: 'Text inside a cicle.',
        component: CicleText,
        code:
            `<svg
    width='100'
    height='100'
    viewBox='0 0 100 100'
    class='animate-[spin_16s_linear_infinite]'
>
    <defs>
        <path id='circle' d='M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0' />
    </defs>
    <text class='font-bold uppercase'>
        <textPath href='#circle'>
            Tailtools - Tailwind CSS -
        </textPath>
    </text>
</svg>`
    },
    {
        title: 'Glowing Border Button',
        description: 'A button with a glowing border on hover.',
        component: GlowingBorderButton,
        code: ''
    }
]
