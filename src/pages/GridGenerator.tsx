import { useEffect, useState } from 'react'
import { GridCode, GridGeneratorHeader, GridElementInactive, GridElementActive } from '../components'
import { GRID_CLASSES } from '../constants'

export function GridGenerator() {
    const [columns, setColumns] = useState('5')
    const [rows, setRows] = useState('3')
    const [gap, setGap] = useState('3')
    const [flow, setFlow] = useState('grid-flow-row')
    const [code, setCode] = useState('')
    const [grid, setGrid] = useState<any[][]>([])
    const [busyIndexes, setBusyIndexes] = useState<any[][]>([])
    const [numberOfItems, setNumberOfItems] = useState<number[]>([])

    useEffect(() => {
        const code = `grid ${GRID_CLASSES.columns[columns]} ${GRID_CLASSES.rows[rows]} ${flow} ${GRID_CLASSES.gaps[gap]}`
        setCode(code)
    }, [columns, rows, gap, flow])

    useEffect(() => {
        const grid = Array.from(Array(Number(rows)))
            .map(() => (
                Array.from(Array(Number(columns)))
                    .map((_, index) => (
                        index
                    ))
            ))

        // Update the busy indexes
        const newBusyIndexes = updateBusyIndexes(Number(rows), Number(columns))

        setGrid(grid)
        setBusyIndexes(newBusyIndexes)
    }, [columns, rows])

    const updateBusyIndexes = (newRows: number, newColumns: number) => {
        const newBusyIndexes = []

        for (let i = 0; i < newRows; i++) {
            if (busyIndexes[i]) {
                // Keep the columns that already exist
                newBusyIndexes[i] = [...busyIndexes[i]]
            } else {
                // Add the new columns
                newBusyIndexes[i] = Array(newColumns).fill(false)
            }
        }

        // Remove the rows that are not needed
        newBusyIndexes.splice(newRows)

        // Add the new columns
        newBusyIndexes.forEach(row => {
            row.splice(newColumns)
            row.push(...Array(newColumns - row.length).fill(false))
        })

        return newBusyIndexes
    }

    const handleBusyIndexesClick = (rIndex: number, cIndex: number, action?: 'add' | 'remove') => {
        const newBusyIndexes = busyIndexes.map((row, rowIndex) => (
            row.map((column, columnIndex) => {
                if (rowIndex === rIndex && columnIndex === cIndex) {
                    if (action === 'add') {
                        let newNumberToBeAdded = 1

                        if (numberOfItems.length > 0) {
                            for (let i = 1; i <= numberOfItems.length; i++) {
                                if (!numberOfItems.includes(i)) {
                                    newNumberToBeAdded = i
                                    break
                                } else {
                                    newNumberToBeAdded = numberOfItems.length + 1
                                }
                            }
                        }

                        const newNumberOfItems = [...numberOfItems, newNumberToBeAdded]
                        setNumberOfItems(newNumberOfItems)

                        return newNumberToBeAdded
                    } else if (action === 'remove') {
                        const number = busyIndexes[rowIndex][columnIndex]

                        if (numberOfItems.includes(number)) {
                            const newNumberOfItems = numberOfItems.filter((item) => item !== number)
                            setNumberOfItems(newNumberOfItems)
                        }

                        return false
                    }
                } else {
                    return column
                }
            })
        ))

        setBusyIndexes(newBusyIndexes)
    }

    return (
        <div className='w-full min-h-[calc(100vh_-_64px)] flex flex-col items-center justify-center p-8 overflow-hidden'>
            <GridGeneratorHeader
                columns={columns}
                setColumns={setColumns}
                rows={rows}
                setRows={setRows}
                gap={gap}
                setGap={setGap}
                setFlow={setFlow}
            />
            <div className='w-full py-8'>
                <div className={'w-full min-h-96 select-none ' + code}>
                    {grid.map((row, rowIndex) => (
                        row.map((_, columnIndex) => (
                            busyIndexes[rowIndex][columnIndex] ? (
                                <GridElementActive
                                    key={`${rowIndex}-${columnIndex}`}
                                    item={busyIndexes[rowIndex][columnIndex]}
                                    onPress={() => handleBusyIndexesClick(rowIndex, columnIndex, 'remove')}
                                />
                            ) : (
                                <GridElementInactive
                                    key={`${rowIndex}-${columnIndex}`}
                                    onPress={() => handleBusyIndexesClick(rowIndex, columnIndex, 'add')}
                                />
                            )
                        ))
                    ))}
                </div>
            </div>
            <GridCode code={code} busyIndexes={busyIndexes} />
        </div >
    )
}
