import { useEffect, useState } from 'react'
import { Snippet } from '@nextui-org/react'
import { Icons } from '..'
import { getGridCode } from '../../utils'

interface Props {
    code: string
    busyIndexes: number[][]
}

export function GridCode({ code, busyIndexes }: Props) {
    const [HTMLCode, setHTMLCode] = useState('')

    useEffect(() => {
        const html = getGridCode(code, busyIndexes)
        setHTMLCode(html)
    }, [code, busyIndexes])

    return (
        <div className='w-full border-2 border-black/10 dark:border-white/10 rounded-2xl'>
            <Snippet
                hideSymbol
                variant='bordered'
                copyIcon={<Icons.Copy />}
                // className='w-full h-auto border-none overflow-x-auto small-scrollbar px-6 py-3'
                classNames={{
                    base: 'relative w-full h-auto border-none overflow-x-auto small-scrollbar px-6 py-3',
                    pre: 'max-xl:absolute max-xl:left-16',
                    copyButton: 'max-xl:absolute max-xl:left-4'
                }}
            >
                {HTMLCode.split('\n').map((line, index) => (
                    <span key={index} className={`flex text-xs sm:text-sm font-console ${line.includes('\t') ? 'indent-10' : ''}`}>
                        {line}
                    </span>
                ))}
            </Snippet>
        </div>
    )
}