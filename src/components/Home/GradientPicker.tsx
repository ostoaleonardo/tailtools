interface Colors {
    from: string
    to: string
}

export function GradientPicker({ colors }: { colors: Colors }) {
    return (
        <div className='w-full flex items-center'>
            <div className={`relative w-full h-4/6 bg-gradient-to-br ${colors.from} ${colors.to} border-white border-8 rounded-r-3xl transition-all`} />
        </div>
    )
}