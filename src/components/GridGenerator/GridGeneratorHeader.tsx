import { Input, Select, SelectItem } from '@nextui-org/react'

const INPUTS = [
    {
        label: 'Columns',
        defaultValue: '1',
        placeholder: 'Number of columns',
    },
    {
        label: 'Rows',
        defaultValue: '1',
        placeholder: 'Number of rows',
    },
    {
        min: 0,
        label: 'Gap',
        defaultValue: '3',
        placeholder: 'Gap between columns and rows',
    }
]

const GRID_FLOWS = [
    { value: 'grid-flow-row' },
    { value: 'grid-flow-col' },
    { value: 'grid-flow-row-dense' },
    { value: 'grid-flow-col-dense' },
]

interface GridGeneratorHeaderProps {
    columns: string
    setColumns: (value: string) => void
    rows: string
    setRows: (value: string) => void
    gap: string
    setGap: (value: string) => void
    setFlow: (value: string) => void
}

export function GridGeneratorHeader({ columns, setColumns, rows, setRows, gap, setGap, setFlow }: GridGeneratorHeaderProps) {
    return (
        <div className='w-full flex flex-col lg:flex-row items-center justify-between bg-slate-300 dark:bg-zinc-800 rounded-2xl p-8 gap-8'>
            <div className='w-full flex flex-col gap-1'>
                <h1 className='text-4xl font-bold'>Grid generator</h1>
                <p className='text-base lg:text-lg'>Generate visually appealing grids with ease.</p>
            </div>
            <div className='w-full lg:w-2/3 flex items-center justify-end gap-4'>
                {INPUTS.map((input, index) => (
                    <Input
                        key={index}
                        min={input.min ?? 1}
                        max={12}
                        isRequired
                        type='number'
                        variant='faded'
                        label={input.label}
                        placeholder={input.placeholder}
                        defaultValue={input.defaultValue}
                        value={index === 0 ? columns : index === 1 ? rows : gap}
                        onChange={(e) => {
                            switch (index) {
                                case 0:
                                    setColumns(e.target.value)
                                    break
                                case 1:
                                    setRows(e.target.value)
                                    break
                                case 2:
                                    setGap(e.target.value)
                                    break
                            }
                        }}
                    />
                ))}
                <Select
                    isRequired
                    variant='faded'
                    disallowEmptySelection
                    label='Grid flow'
                    placeholder='Select a flow'
                    defaultSelectedKeys={['grid-flow-row']}
                    items={GRID_FLOWS}
                    className='min-w-52'
                    onChange={(e) => { setFlow(e.target.value) }}
                >
                    {(flow) => <SelectItem key={flow.value}>{flow.value}</SelectItem>}
                </Select>
            </div>
        </div>
    )
}
