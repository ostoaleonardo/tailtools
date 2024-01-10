interface Palette {
    name: string
    colors: { hex: string }[]
}

export function CircleButton({ palette, isSelected, onPress }: { palette: Palette, isSelected: boolean, onPress: () => void }) {
    const borderClass = isSelected ? 'border-white' : 'border-transparent'

    return (
        <button
            onClick={onPress}
            className={`w-14 flex aspect-square rounded-full overflow-hidden border-4 ${borderClass} transition-all`}
        >
            {palette.colors.map((color, index) => (
                <div key={index} className={'h-full flex flex-1'} style={{ backgroundColor: color.hex }} />
            ))}
        </button>
    )
}