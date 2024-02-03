interface Props {
    code: string
}

export function ShadowCode({ code }: Props) {
    return (
        <div className='w-full flex flex-col'>
            {code.split(',').map((line, index) => (
                <span key={index} className='text-xs sm:text-sm font-console'>
                    {index < code.split(',').length - 1 ? `${line},` : line}
                </span>
            ))}
        </div>
    )
}