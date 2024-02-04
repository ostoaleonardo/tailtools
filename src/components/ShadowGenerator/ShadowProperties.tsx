import { Input, Select, SelectItem } from '@nextui-org/react'

const INPUTS = [
    {
        label: 'x',
        min: -255,
        defaultValue: '0',
    },
    {
        label: 'y',
        min: -255,
        defaultValue: '16',
    },
    {
        label: 'blur',
        min: 0,
        defaultValue: '16',
    },
    {
        label: 'spread',
        min: 0,
        defaultValue: '0',
    }
]

const INSET_OPTIONS = [
    { label: 'Active', value: 'true' },
    { label: 'Inactive', value: 'false' },
]

interface Props {
    shadow: any
    setShadow: (shadow: any) => void
    currentLayer: number
}

export function ShadowProperties({ shadow, setShadow, currentLayer }: Props) {
    const handleChanges = (e: any) => {
        const value = e.target.value
        const name = e.target.name

        setShadow((prevShadow: any) => {
            const newShadow = [...prevShadow]
            newShadow[currentLayer] = {
                ...newShadow[currentLayer],
                [name]: value
            }
            return newShadow
        })
    }
    console.log(shadow)

    return (
        <div className='flex flex-col items-center bg-slate-300 dark:bg-zinc-800 rounded-2xl p-8 gap-8'>
            <div className='w-full flex flex-col gap-1'>
                <h2 className='text-3xl font-bold'>Properties</h2>
                <p className='text-sm lg:text-base'>Set the properties for the shadow.</p>
            </div>
            <div className='w-full flex flex-col items-center justify-end gap-4'>
                {INPUTS.map((input, index) => (
                    <Input
                        isRequired
                        key={index}
                        min={input.min}
                        max={255}
                        type='number'
                        variant='faded'
                        label={input.label}
                        name={input.label}
                        value={shadow[currentLayer][input.label].toString()}
                        defaultValue={input.defaultValue}
                        className='max-md:flex-1 capitalize'
                        onChange={(e) => handleChanges(e)}
                    />
                ))}
                <Input
                    isRequired
                    type='text'
                    name='color'
                    label='Color'
                    variant='faded'
                    value={shadow[currentLayer].color}
                    defaultValue='#0000004d'
                    className='max-md:flex-1'
                    onChange={(e) => handleChanges(e)}
                />
                <Select
                    isRequired
                    disallowEmptySelection
                    variant='faded'
                    name='inset'
                    label='Inset'
                    placeholder='Select an option'
                    selectedKeys={shadow[currentLayer].inset === 'true' ? ['true'] : ['false']}
                    defaultSelectedKeys={['false']}
                    items={INSET_OPTIONS}
                    className='max-md:flex-1'
                    onChange={(e) => handleChanges(e)}
                >
                    {(option) => <SelectItem key={option.value}>{option.label}</SelectItem>}
                </Select>
            </div>
        </div>
    )
}