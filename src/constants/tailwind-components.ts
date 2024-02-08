import {
    GlowingBorderButton,
    GlowingBorderCard,
    GridPattern,
    SkewGridPattern,
    CicleText,
    DashedGridPattern
} from '../components'
import { GlowingRainbowButton } from '../components/TailwindComponents/Components/Buttons/GlowingRainbowButton'

export const TAILWIND_COMPONENTS = [
    {
        title: 'Buttons',
        description: 'Beautiful buttons that will make your website look great.',
        components: [
            {
                title: 'Glowing Border',
                description: 'A button with a glowing border on hover.',
                component: GlowingBorderButton,
                code: ''
            },
            {
                title: 'Glowing Rainbow',
                description: 'A button with a glowing rainbow border.',
                component: GlowingRainbowButton,
                code: ''
            }
        ]
    },
    {
        title: 'Cards',
        description: 'Show your content in a beautiful way.',
        components: [
            {
                title: 'Glowing Border',
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
                title: 'Simple Grid',
                description: 'A simple grid pattern.',
                component: GridPattern,
                code: ''
            },
            {
                title: 'Dashed Grid',
                description: 'A grid pattern with dashed lines.',
                component: DashedGridPattern,
                code: ''
            },
            {
                title: 'Skew Grid',
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
