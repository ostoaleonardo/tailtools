import { Link } from 'react-router-dom'

interface Props {
    textActiveColor: string
}

export function NavBrand({ textActiveColor }: Props) {
    return (
        <Link to='/' className='flex items-center justify-center font-bold leading-none' style={{ color: textActiveColor }}>
            Tailtools
            <span
                className='text-[10px] rounded-full px-2 py-1 ml-2'
                style={{ color: 'currentcolor', borderColor: 'currentcolor', borderWidth: 2 }}
            >
                Beta
            </span>
        </Link >
    )
}
