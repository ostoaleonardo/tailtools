interface Colors {
    from: { tailwind: string, hex: string }
    to: { tailwind: string, hex: string }
}

export function GradientPicker({ colors }: { colors: Colors }) {
    return (
        <div className='w-64 flex items-center'>
            <div className={`relative w-full h-3/4 bg-gradient-to-br ${colors.from.tailwind} ${colors.to.tailwind} border-white border-4 rounded-2xl transition-all`}>
                <div className='absolute -top-3 -left-3 h-2/3 aspect-square border-white border-4 rounded-full shadow-xl transition-background' style={{ backgroundColor: colors.from.hex }} />
                <div className='absolute -bottom-3 -right-3 h-2/3 aspect-square border-white border-4 rounded-full shadow-xl transition-background' style={{ backgroundColor: colors.to.hex }} />
            </div>
        </div>
    )
}