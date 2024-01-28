interface Colors {
    from: string
    to: string
}

export function GradientPicker({ colors }: { colors: Colors }) {
    return (
        <div className='w-full flex items-end'>
            <div className={`w-full h-2 md:h-3 bg-gradient-to-r ${colors.from} ${colors.to} transition-all mb-2 md:mb-4`} />
        </div>
    )
}