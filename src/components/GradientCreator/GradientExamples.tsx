import { useEffect, useState } from 'react'
import { Button, Select, SelectItem } from '@nextui-org/react'
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
    const [isGradientText, setIsGradientText] = useState(false)
    const [code, setCode] = useState('')

    useEffect(() => {
        const gradient = `${direction} ${from} ${via ? via : ''} ${to} ${isGradientText ? 'bg-clip-text text-transparent' : ''}`
        setCode(gradient.replace(/\s+/g, ' '))
    }, [direction, isGradientText])

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1000)
    }

    const handleGradient = () => {
        setIsGradientText(!isGradientText)
    }

    return (
        <article className='w-full min-h-80 flex flex-col bg-titan-white dark:bg-zinc-900 border-2 border-black/5 dark:border-white/5 rounded-3xl transition-all'>
            <div className='flex flex-col items-start p-6'>
                <h3 className='text-xl font-medium text-foreground transition-all'>{name}</h3>
                <div className='inline-flex flex-wrap gap-1'>
                    <span className='text-xs text-foreground/70 bg-slate-200 dark:bg-zinc-800 rounded-full transition-all px-2 py-1 mt-1'>{from}</span>
                    {via && <span className='text-xs text-foreground/70 bg-slate-200 dark:bg-zinc-800 rounded-full transition-all px-2 py-1 mt-1'>{via}</span>}
                    <span className='text-xs text-foreground/70 bg-slate-200 dark:bg-zinc-800 rounded-full transition-all px-2 py-1 mt-1'>{to}</span>
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
                        classNames={{
                            trigger: 'bg-slate-200 dark:bg-zinc-800 data-[hover=true]:bg-slate-300 dark:data-[hover=true]:bg-zinc-700 transition-all',
                        }}
                    >
                        {(direction) => <SelectItem key={direction.value}>{direction.label}</SelectItem>}
                    </Select>
                    <Button
                        isIconOnly
                        variant='light'
                        onPress={handleGradient}
                    >
                        {isGradientText ? <Icons.Background /> : <Icons.Text />}
                    </Button>
                    <Button
                        isIconOnly
                        variant='light'
                        onPress={handleCopy}
                    >
                        {isCopied ? <Icons.Check /> : <Icons.Copy />}
                    </Button>
                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center rounded-3xl overflow-hidden'>
                {isGradientText ? (
                    <span
                        contentEditable
                        spellCheck='false'
                        className={`text-4xl font-bold ${code} truncate px-1 mx-8`}
                    >
                        I am editable
                    </span>
                ) : (
                    <div className={`w-full h-full ${code}`} />
                )}
            </div>
        </article>
    )
}

export function GradientExamples() {
    return (
        <section id='gradient-examples' className='w-full flex flex-col items-center justify-center pt-32 pb-16'>
            <h2 className='text-4xl font-bold'>
                Gradient <span className='bg-gradient-to-r from-violet-500 via-pink-400 to-yellow-500 bg-[length:100%_4px] bg-no-repeat bg-bottom'>Examples</span>
            </h2>
            <p className='text-base lg:text-lg text-center text-foreground/70 text-balance max-w-3xl mt-4'>Here are some examples of gradients you can use in your projects. Click on the copy button to copy the gradient code to your clipboard.</p>
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
