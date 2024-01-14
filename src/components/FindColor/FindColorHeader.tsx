import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { ColorPicker } from '.'
import { Icons } from '../UI'
import { useColor, useFetch } from '../../hooks'
import { PLACEHOLDER } from '../../constants'

export function FindColorHeader() {
    const [input, setInput] = useState('')
    const { color, contrast } = useColor()
    const { fetchColor } = useFetch()

    const getColor = async (input: string) => {
        if (!input || input.replace('#', '') === color.hex.replace('#', '')) return

        await fetchColor(input)
    }

    return (
        <header className='w-full flex items-center justify-center bg-violet-800 transition-all px-8 py-8 md:py-24' style={{ backgroundColor: color.hex }}>
            <div className='h-full max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-8'>
                <div className='w-full flex flex-col'>
                    <h1 className='text-4xl md:text-6xl font-bold text-neutral-100' style={{ color: contrast }}>
                        Find Your Color
                    </h1>
                    <p className='text-base md:text-xl font-light text-neutral-100' style={{ color: contrast }}>
                        Find your color and get inspired!
                    </p>
                    <div className='flex items-end mt-4'>
                        <Input
                            size='lg'
                            type='text'
                            variant='underlined'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={PLACEHOLDER[Math.floor(Math.random() * PLACEHOLDER.length)]}
                            classNames={{
                                input: 'placeholder:text-white/60 uppercase',
                                base: 'w-full md:w-2/4',
                            }}
                            style={{ color: contrast }}
                            startContent={<ColorPicker setInput={setInput} />}
                        />
                        <Button
                            isIconOnly
                            variant='bordered'
                            onClick={() => getColor(input)}
                            className='border-white ml-4'
                            style={{ color: contrast, borderColor: contrast }}
                        >
                            <Icons.Search />
                        </Button>
                    </div>
                </div>
                <div className='flex flex-1 md:flex-col items-center md:items-end rounded-2xl transition-all p-6 gap-2' style={{ backgroundColor: `${contrast}0D` }}>
                    <span className='text-lg md:text-6xl text-end font-bold text-neutral-100' style={{ color: contrast }}>
                        {color.name}
                    </span>
                    <span className='text-sm md:text-2xl font-bold text-neutral-100 opacity-60' style={{ color: contrast }}>
                        {color.hex}
                    </span>
                </div>
            </div>
        </header>
    )
}