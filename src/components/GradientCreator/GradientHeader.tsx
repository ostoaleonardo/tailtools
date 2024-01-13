import { Select, SelectItem } from '@nextui-org/react'
import { GRADIENT_DIRECTIONS, VIA_OPTIONS } from '../../constants'

export function GradientHeader({ setDirection, setVia }: { setDirection: Function, setVia: Function }) {
    return (
        <div className='w-full flex items-center justify-between bg-slate-300 dark:bg-zinc-800 rounded-2xl p-8'>
            <div className='w-full flex flex-col'>
                <h1 className='text-4xl font-bold'>Gradient Creator</h1>
                <p className='text-lg'>Choose the colors and direction of your gradient.</p>
            </div>
            <div className='w-1/2 flex items-center justify-end gap-4'>
                <Select
                    isRequired
                    variant='faded'
                    className='max-w-xs'
                    disallowEmptySelection
                    label='Gradient direction'
                    placeholder='Select a direction'
                    defaultSelectedKeys={['bg-gradient-to-t']}
                    items={GRADIENT_DIRECTIONS}
                    onChange={(e) => { setDirection(e.target.value) }}
                >
                    {(direction) => <SelectItem key={direction.value}>{direction.label}</SelectItem>}
                </Select>
                <Select
                    isRequired
                    variant='faded'
                    className='max-w-xs'
                    label='Gradient via'
                    disallowEmptySelection
                    placeholder='Select a via'
                    defaultSelectedKeys={['false']}
                    items={VIA_OPTIONS}
                    onChange={(e) => { setVia(e.target.value) }}
                >
                    {(via) => <SelectItem key={via.value}>{via.label}</SelectItem>}
                </Select>
            </div>
        </div>
    )
}