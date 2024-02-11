import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface Props {
    title: string
    description: string
    children?: React.ReactNode
    setSelected: (selected: string) => void
}

export function ComponentsSection({ title, description, children, setSelected }: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-300px 0px' })
    const id = title?.toLowerCase()

    useEffect(() => {
        if (isInView) setSelected(id)
    }, [isInView])

    return (
        <section
            id={id}
            ref={ref}
            className='w-full min-h-screen flex flex-col justify-center py-28 gap-2'
        >
            <h2 className='text-5xl font-bold bg-gradient-to-t from-foreground to-slate-400 bg-clip-text text-transparent transition-all'>{title}</h2>
            <p className='text-lg mb-8 transition-all'>{description}</p>
            <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                {children}
            </div>
        </section>
    )
}
