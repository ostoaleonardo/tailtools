const TITLE = ' | Tailtools: Tailwind CSS Tools';

export const ROUTES = [
    {
        name: 'Palettes',
        tools: [
            {
                path: '/palette-generator',
                name: 'Palette Generator',
                description: 'Generate a color shades based on a color',
                meta: {
                    title: 'Palette Generator' + TITLE,
                    description: 'Generate a color shades based on a color and export it to Tailwind CSS or CSS variables in seconds.',
                }
            },
            {
                path: '/random-palette',
                name: 'Random Palette',
                description: 'Generate a random palette',
                meta: {
                    title: 'Random Palette Generator' + TITLE,
                    description: 'Generate a random color palette and export it to Tailwind CSS or CSS variables in seconds.',
                }
            },
        ]
    },
    {
        name: 'Gradients',
        tools: [
            {
                path: '/gradient-creator',
                name: 'Gradient Creator',
                description: 'Gradients for backgrounds or texts',
                meta: {
                    title: 'Gradient Creator' + TITLE,
                    description: 'Create your own Tailwind CSS gradient for backgrounds or texts and copy the code to your clipboard.',
                }
            },
        ]
    },
    {
        name: 'Grids',
        tools: [
            {
                path: '/grid-generator',
                name: 'Grid Generator',
                description: 'Create a grid for your layout',
                meta: {
                    title: 'Grid Generator' + TITLE,
                    description: 'Create a grid for your layout with Tailwind CSS classes and copy the code to your clipboard.',
                }
            },
        ]
    },
    {
        name: 'Shadows',
        tools: [
            {
                path: '/shadow-generator',
                name: 'Shadow Generator',
                description: 'Create a shadow for your components',
                meta: {
                    title: 'Shadow Generator' + TITLE,
                    description: 'Create a shadow for your components with Tailwind CSS classes or CSS and copy the code to your clipboard.',
                }
            },
        ]
    }
]
