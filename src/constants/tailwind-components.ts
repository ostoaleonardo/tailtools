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

import {
    AppleBentoPreview
} from '@/assets/images'

export const TAILWIND_COMPONENTS = [
    {
        title: 'Buttons',
        description: 'Beautiful buttons that will make your website look great.',
        components: [
            {
                title: 'Glowing Border',
                description: 'A button with a glowing border on hover.',
                component: GlowingBorderButton,
                preview: '',
                code: ''
            },
            {
                title: 'Glowing Rainbow',
                description: 'A button with a glowing rainbow border.',
                component: GlowingRainbowButton,
                preview: '',
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
                preview: '',
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
                preview: '',
                code: ''
            },
            {
                title: 'Dashed Grid',
                description: 'A grid pattern with dashed lines.',
                component: DashedGridPattern,
                preview: '',
                code: ''
            },
            {
                title: 'Skew Grid',
                description: 'A grid pattern with skew effect.',
                component: SkewGridPattern,
                preview: '',
                code: ''
            },
            {
                title: 'Dot Pattern',
                description: 'A pattern with dots.',
                component: DotPattern,
                preview: '',
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
                preview: '',
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
                preview: AppleBentoPreview,
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
                preview: '',
                code: ''
            },
            {
                title: 'Cicle Text',
                description: 'Text inside a cicle.',
                component: CicleText,
                preview: '',
                code: ''
            }
        ]
    }
]
