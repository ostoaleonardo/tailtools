import { Link } from 'react-router-dom'

interface Props {
    textActiveColor: string
}

export function NavBrand({ textActiveColor }: Props) {
    return (
        <Link to='/' className='flex items-center font-syne leading-none uppercase' style={{ color: textActiveColor }}>
            Tailtools
            <span
                className='text-[9px] font-syne rounded-full px-2 py-1 ml-2'
                style={{ color: 'currentcolor', borderColor: 'currentcolor', borderWidth: 2 }}
            >
                Beta
            </span>
        </Link >
    )
}
