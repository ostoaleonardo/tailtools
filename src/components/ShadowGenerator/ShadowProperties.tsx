import { Input, Select, SelectItem } from '@nextui-org/react'

const INPUTS = [
    {
        label: 'X',
        min: -255,
        defaultValue: '0',
    },
    {
        label: 'Y',
        min: -255,
        defaultValue: '16',
    },
    {
        label: 'Blur',
        min: 0,
        defaultValue: '16',
    },
    {
        label: 'Spread',
        min: 0,
        defaultValue: '0',
    }
]

const INSET_OPTIONS = [
    { label: 'Active', value: 'true' },
    { label: 'Inactive', value: 'false' },
]


interface ShadowState {
    x: number
    y: number
    blur: number
    spread: number
    color: string
    inset: boolean
}

interface Props {
    setShadow: (value: React.SetStateAction<ShadowState>) => void
}

export function ShadowProperties({ setShadow }: Props) {
    return (
        <div className='w-64 min-h-full flex flex-col items-center justify-between bg-slate-300 dark:bg-zinc-800 rounded-2xl p-8 gap-8'>
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
                        defaultValue={input.defaultValue}
                        className='max-md:flex-1'
                        onChange={(e) => {
                            const value = e.target.value
                            setShadow((prevShadow) => ({
                                ...prevShadow,
                                [input.label.toLowerCase()]: value
                            }))
                        }}
                    />
                ))}
                <Input
                    isRequired
                    type='text'
                    label='Color'
                    variant='faded'
                    defaultValue='#0000004d'
                    className='max-md:flex-1'
                    onChange={(e) => {
                        const value = e.target.value
                        setShadow((prevShadow) => ({
                            ...prevShadow,
                            color: value
                        }))
                    }}
                />
                <Select
                    isRequired
                    variant='faded'
                    disallowEmptySelection
                    label='Inset'
                    placeholder='Select an option'
                    defaultSelectedKeys={['false']}
                    items={INSET_OPTIONS}
                    className='xl:min-w-48'
                    onChange={(e) => {
                        const value = e.target.value
                        setShadow((prevShadow) => ({
                            ...prevShadow,
                            inset: value === 'true'
                        }))
                    }}
                >
                    {(option) => <SelectItem key={option.value}>{option.label}</SelectItem>}
                </Select>
            </div>
        </div>
    )
}