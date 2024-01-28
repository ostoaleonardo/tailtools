interface Props {
    color: string
}

export function GradientBackground({ color }: Props) {
    return (
        <div className={`absolute right-0 w-full h-full bg-gradient-to-t xl:bg-gradient-to-l ${color} via-50% via-transparent opacity-20 transition-all`} />
    )
}