export function CicleText() {
    return (
        <svg viewBox='0 0 100 100' width='100' height='100' className='animate-[spin_16s_linear_infinite]'>
            <defs>
                <path id='circle' d='M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0' />
            </defs>
            <text className='font-bold uppercase'>
                <textPath href='#circle'>
                    Tailtools - Tailwind CSS -
                </textPath>
            </text>
        </svg>
    )
}
