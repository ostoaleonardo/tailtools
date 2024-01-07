import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { Icons } from '../UI'
import { useColor, useFetch } from '../../hooks'
import { PLACEHOLDER } from '../../constants'
import { ColorPicker } from '.'

export function Landing() {
    const { color, contrast } = useColor()
    const { fetchColor } = useFetch()
    const [input, setInput] = useState('')

    const getColor = async () => {
        if (!input) return

        await fetchColor(input)
    }

    return (
        <header className={`w-full h-96 flex items-center justify-center bg-violet-800 transition-all`} style={{ backgroundColor: color.hex }}>
            <div className='max-w-5xl w-full flex flex-col'>
                <h1 className='text-6xl font-bold text-neutral-100' style={{ color: contrast }}>
                    Find Your Color
                </h1>
                <p className='text-xl font-light text-neutral-100' style={{ color: contrast }}>
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
                            input: 'placeholder:text-white/60',
                            base: [
                                'w-1/3',
                            ],
                        }}
                        style={{ color: contrast }}
                        startContent={<ColorPicker setInput={setInput} />}
                    />
                    <Button
                        isIconOnly
                        variant='bordered'
                        onClick={() => getColor()}
                        className='border-white ml-4'
                        style={{ color: contrast, borderColor: contrast }}
                    >
                        <Icons.Search />
                    </Button>
                </div>
            </div>
        </header>
    )
}