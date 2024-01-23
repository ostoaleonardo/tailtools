import { useEffect, useState } from 'react'
import { GridCode, GridGeneratorHeader, GridElementInactive } from '../components'
import { GRID_CLASSES } from '../constants'

export function GridGenerator() {
    const [columns, setColumns] = useState('5')
    const [rows, setRows] = useState('3')
    const [gap, setGap] = useState('3')
    const [flow, setFlow] = useState('grid-flow-row')
    const [code, setCode] = useState('')

    useEffect(() => {
        const code = `grid ${GRID_CLASSES.columns[columns]} ${GRID_CLASSES.rows[rows]} ${flow} ${GRID_CLASSES.gaps[gap]}`
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
                        <GridElementInactive
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <GridCode code={code} />
        </div >
    )
}
