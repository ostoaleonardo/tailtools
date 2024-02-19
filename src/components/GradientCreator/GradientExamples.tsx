import { useEffect, useState } from 'react'
import { Button, Select, SelectItem, Tooltip } from '@nextui-org/react'
import { GRADIENTS_EXAMPLES, GRADIENT_DIRECTIONS } from '@/constants'
import { Icons } from '..'

interface Props {
    name: string
    from: string
    via?: string
    to: string
}

export function GradientExample({ name, from, via, to }: Props) {
    const [direction, setDirection] = useState('bg-gradient-to-r')
    const [isCopied, setIsCopied] = useState(false)
    const [code, setCode] = useState('')

    useEffect(() => {
        const gradient = `${direction} ${from} ${via ? via : ''} ${to}`
        setCode(gradient.replace(/\s+/g, ' '))
    }, [direction, from, via, to])

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1000)
    }

    return (
        <article className='w-full min-h-80 flex flex-col bg-titan-white dark:bg-zinc-900 border-2 border-black/5 dark:border-white/5 rounded-3xl transition-all'>
            <div className='flex flex-col items-start p-6'>
                <h3 className='text-xl font-medium text-foreground transition-all'>{name}</h3>
                <div className='inline-flex flex-wrap gap-1'>
                    <span className='text-xs text-foreground/70 bg-zinc-800 rounded-full transition-all px-2 py-1 mt-1'>{from}</span>
                    {via && <span className='text-xs text-foreground/70 bg-zinc-800 rounded-full transition-all px-2 py-1 mt-1'>{via}</span>}
                    <span className='text-xs text-foreground/70 bg-zinc-800 rounded-full transition-all px-2 py-1 mt-1'>{to}</span>
                </div>
                <div className='w-full flex flex-row items-center justify-between mt-3 gap-4'>
                    <Select
                        isRequired
                        variant='flat'
                        disallowEmptySelection
                        label='Direction'
                        items={GRADIENT_DIRECTIONS}
                        defaultSelectedKeys={['bg-gradient-to-r']}
                        onChange={(e) => { setDirection(e.target.value) }}
                    >
                        {(direction) => <SelectItem key={direction.value}>{direction.label}</SelectItem>}
                    </Select>
                    <Button
                        isIconOnly
                        variant='light'
                        onPress={handleCopy}
                    >
                        {isCopied ? <Icons.Check /> : <Icons.Copy />}
                    </Button>
                </div>
            </div>
            <div className={`w-full h-full flex items-center justify-center ${code} rounded-3xl group`}>
                <div className='opacity-0 group-hover:opacity-100 transition-opacity mix-blend-plus-lighter'>
                    <Tooltip content='Copy color' placement='left' delay={700}>
                        <Button
                            isIconOnly
                            variant='light'
                            onPress={handleCopy}
                        >
                            {isCopied ? <Icons.Check /> : <Icons.Copy />}
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </article>
    )
}

export function GradientExamples() {
    return (
        <section className='w-full flex flex-col items-center justify-center pt-32 pb-16'>
            <h2 className='text-4xl font-bold'>Gradient Examples</h2>
            <div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-16'>
                {GRADIENTS_EXAMPLES.map((gradient, index) => (
                    <GradientExample
                        key={index}
                        name={gradient.name}
                        from={gradient.from}
                        via={gradient.via}
                        to={gradient.to}
                    />
                ))}
            </div>
        </section>
    )
}
