import { useState } from 'react'
import { Button } from '@nextui-org/react'
import { Icons } from '..'

interface Props {
    code: string
}

export function ShadowTailwindCode({ code }: Props) {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1000)
    }

    return (
        <div className='relative w-full flex flex-col justify-center border-black/10 dark:border-white/10 border-2 rounded-2xl px-6 py-4'>
            {code.split('\n').map((line, index) => (
                <span key={index} className={`w-11/12 flex text-xs sm:text-sm font-console ${line.includes('\t') ? 'indent-10' : ''}`}>
                    {line}
                </span>
            ))}

            <Button
                isIconOnly
                variant='light'
                className='absolute right-4'
                onClick={handleCopy}
            >
                {isCopied ? <Icons.Check /> : <Icons.Copy />}
            </Button>
        </div>
    )
}