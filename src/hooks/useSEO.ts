import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants'

const DEFAULT_TITLE = 'Tailtools: Tailwind CSS Tools'
const DEFAULT_DESCRIPTION = 'Design even faster with our collection of interactive tools to generate code for Tailwind CSS, generate color palettes, gradients for backgrounds or texts, grids for your layout, shadows for your components, and more.'

export function useSEO() {
    const location = useLocation()
    const path = location.pathname

    const { tool } = useMemo(() => {
        const route = ROUTES.find(route => route.tools.some(tool => tool.path === location.pathname))
        const tool = route?.tools.find(tool => tool.path === location.pathname)
        return { tool }
    }, [location])

    useEffect(() => {
        const title = tool?.meta.title || DEFAULT_TITLE
        const description = tool?.meta.description || DEFAULT_DESCRIPTION

        updateSEO(title, description)
    }, [tool])

    const updateSEO = (title: string, description: string) => {
        document.title = title

        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', description)
        }
    }

    return { path }
}