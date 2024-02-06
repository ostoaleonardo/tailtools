interface Props {
    title?: string
    description?: string
    children?: React.ReactNode
}

export function ComponentsSection({ title, description, children }: Props) {
    return (
        <section
            id={title?.toLowerCase()}
            className='w-full h-full flex flex-col py-16 gap-2'
        >
            <h2 className='text-5xl font-bold transition-all'>{title}</h2>
            <p className='text-lg mb-8 transition-all'>{description}</p>
            <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                {children}
            </div>
        </section>
    )
}
