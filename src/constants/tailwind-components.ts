import {
    GlowingBorderButton,
    GlowingRainbowButton,
    GlowingBorderCard,
    GridPattern,
    DashedGridPattern,
    SkewGridPattern,
    DotPattern,
    LinesBackground,
    AppleBento,
    TypeWriter,
    CicleText
} from '@/components'

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
            },
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
            },
            {
                title: 'Dot Pattern',
                description: 'A pattern with dots.',
                component: DotPattern,
                code: ''
            }
        ]
    },
    {
        title: 'Backgrounds',
        description: 'Beautiful backgrounds for your website.',
        components: [
            {
                title: 'Lines Background',
                description: 'A background with animated lines.',
                component: LinesBackground,
                code: ''
            }
        ]
    },
    {
        title: 'Bentos',
        description: 'Just some bentos to make your website look better.',
        components: [
            {
                title: 'Bento Apple',
                description: 'A bento inspired by Apple.',
                component: AppleBento,
                code: ''
            }
        ]
    },
    {
        title: 'Texts',
        description: 'Highlight your text with amazing styles.',
        components: [
            {
                title: 'Typing Text',
                description: 'A text that simulates typing.',
                component: TypeWriter,
                code: ''
            },
            {
                title: 'Cicle Text',
                description: 'Text inside a cicle.',
                component: CicleText,
                code: ''
            }
        ]
    }
]
