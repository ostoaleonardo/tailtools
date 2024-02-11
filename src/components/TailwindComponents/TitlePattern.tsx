interface Props {
    children: React.ReactNode
}

export function TitlePattern({ children }: Props) {
    return (
        <span className='absolute inset-0 flex items-center justify-center font-medium text-lg md:text-xl bg-gradient-to-t from-foreground to-slate-400 bg-clip-text text-transparent transition-all'>
            {children}
        </span>
    )
}