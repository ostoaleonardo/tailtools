import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { ColorPicker } from '.'
import { useColor, useFetch } from '@/hooks'
import { getRandomColor } from '@/utils'
import { Random, Search } from '@/icons'
import { PLACEHOLDER } from '@/constants'

export function PaletteGeneratorHeader() {
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { color, contrast } = useColor()
    const { getColor } = useFetch()

    const getNewColor = async (input: string) => {
        if (!input) return

        setIsLoading(true)
        await getColor(input)
        setIsLoading(false)
    }

    const getRandom = () => {
        const randomColor = getRandomColor()
        setInput(randomColor)
        getNewColor(randomColor)
    }

    return (
        <header
            className='w-full h-96 flex items-center justify-center transition-all px-8'
            style={{ backgroundColor: color.hex }}
        >
            <div className='w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8'>
                <div className='w-full flex flex-col'>
                    <h1
                        className='text-4xl md:text-6xl font-bold'
                        style={{ color: contrast }}
                    >
                        Palette Generator
                    </h1>
                    <p
                        className='md:text-xl'
                        style={{ color: contrast }}
                    >
                        Generate a color palette to Tailwind CSS
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
                                base: 'w-full md:w-80'
                            }}
                            style={{ color: contrast }}
                            startContent={<ColorPicker setInput={setInput} />}
                        />
                        <Button
                            isIconOnly
                            variant='bordered'
                            isLoading={isLoading}
                            onClick={() => getNewColor(input)}
                            className='border-white ml-4'
                            style={{ color: contrast, borderColor: contrast }}
                        >
                            <Search />
                        </Button>
                        <Button
                            isIconOnly
                            variant='bordered'
                            isDisabled={isLoading}
                            onClick={() => getRandom()}
                            className='border-white ml-2'
                            style={{ color: contrast, borderColor: contrast }}
                        >
                            <Random />
                        </Button>
                    </div>
                </div>
                <article
                    className='flex flex-1 md:flex-col items-center md:items-end justify-center rounded-2xl p-6 gap-2'
                    style={{ backgroundColor: contrast + '0D' }}
                >
                    <h3
                        className='text-lg md:text-6xl text-end font-bold'
                        style={{ color: contrast }}
                    >
                        {color.name}
                    </h3>
                    <span
                        className='md:text-xl'
                        style={{ color: contrast }}
                    >
                        {color.hex}
                    </span>
                </article>
            </div>
        </header>
    )
}
