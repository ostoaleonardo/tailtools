import {
    GlowingBorderButton,
    GlowingBorderCard,
    GridPattern,
    SkewGridPattern,
    CicleText,
    DashedGridPattern
} from '../components'

export const TAILWIND_COMPONENTS = [
    {
        title: 'Buttons',
        description: 'Beautiful buttons that will make your website look great.',
        components: [
            {
                title: 'Glowing Border Button',
                description: 'A button with a glowing border on hover.',
                component: GlowingBorderButton,
                code: ''
            }
        ]
    },
    {
        title: 'Cards',
        description: 'Show your content in a beautiful way.',
        components: [
            {
                title: 'Glowing Border Card',
                description: 'A card with a glowing border on hover.',
                component: GlowingBorderCard,
                code: ''
            }
        ]
    },
    {
        title: 'Patterns',
        description: 'Add some life to your website with these amazing patterns.',
        components: [
            {
                title: 'Grid Pattern',
                description: 'A grid pattern with a gradient effect.',
                component: GridPattern,
                code: ''
            },
            {
                title: 'Dashed Grid Pattern',
                description: 'A grid pattern with dashed effect.',
                component: DashedGridPattern,
                code: ''
            },
            {
                title: 'Skew Grid Pattern',
                description: 'A grid pattern with skew effect.',
                component: SkewGridPattern,
                code: ''
            }
        ]
    },
    {
        title: 'Texts',
        description: 'Highlight your text with amazing styles.',
        components: [
            {
                title: 'Cicle Text',
                description: 'Text inside a cicle.',
                component: CicleText,
                code: ''
            }
        ]
    }
]
