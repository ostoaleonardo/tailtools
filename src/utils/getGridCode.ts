export const getGridCode = (code: string, busyIndexes: number[][]) => {
    let html = `
    <div class='${code}'>\n
    ${busyIndexes?.map((row, rowIndex) => (
        row.map((column, columnIndex) => {
            // Items that occupy one grid space (1x1) and it is the first item in the row
            if (column && columnIndex === 0) {
                if (rowIndex === 0) {
                    return `\t<div></div>\n`
                } else {
                    return `\t<div class='row-start-${rowIndex + 1}'></div>\n`
                }
            }

            // Items that occupy one grid space (1x1) and it is not the first item in the row
            if (column && columnIndex !== 0) {
                if (rowIndex === 0) {
                    return `\t<div class='col-start-${columnIndex + 1}'></div>\n`
                } else {
                    return `\t<div class='col-start-${columnIndex + 1} row-start-${rowIndex + 1}'></div>\n`
                }
            }
        })
    ))}
    </div>`

    html = html.replace(/,/g, '')

    return html
}