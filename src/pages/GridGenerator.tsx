import { useEffect, useState } from 'react'
import { GridCode, GridGeneratorHeader } from '../components'
import { GRID_CLASSES } from '../constants'

export function GridGenerator() {
    const [columns, setColumns] = useState('5')
    const [rows, setRows] = useState('3')
    const [gap, setGap] = useState('3')
    const [flow, setFlow] = useState('grid-flow-row')
    const [code, setCode] = useState('')

    useEffect(() => {
        const code = `grid ${GRID_CLASSES.columns[columns]} ${GRID_CLASSES.rows[rows]} ${flow} ${gap === '0' ? '' : `gap-${gap}`}`
        setCode(code)
    }, [columns, rows, gap, flow])

    return (
        <div className='w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center px-8 py-8'>
            <GridGeneratorHeader
                columns={columns}
                setColumns={setColumns}
                rows={rows}
                setRows={setRows}
                gap={gap}
                setGap={setGap}
                setFlow={setFlow}
            />
            <div className='w-full h-96 py-8'>
                <div className={'w-full h-full ' + code}>
                    {Array.from({ length: Number(columns) * Number(rows) }).map((_, index) => (
                        <div
                            key={index}
                            className='bg-slate-200 dark:bg-zinc-700 border-black/10 dark:border-white/10 border-2 rounded-lg'
                        >
                            <div className='w-full h-full flex items-center justify-center'>
                                {index === 0
                                    ? <p className='text-slate-900/70 dark:text-zinc-100/70'>{index + 1}</p>
                                    : <p className='text-slate-900/30 dark:text-zinc-100/30'>+</p>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <GridCode code={code} />
        </div >
    )
}
