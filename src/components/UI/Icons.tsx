const Search = (props: any) => (
    <svg width='0.89em' height='1em' viewBox='0 0 740 840' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path fill='currentColor' d='M734 668q8 9 0 17l-49 49q-3 3-8 3t-8-3L519 584q-50 38-112 55t-133 6q-53-8-99-33t-83-61t-59-85T3 366q-10-79 16-150T96 95t121-76T367 3q53 7 100 30t84 59t62 82t33 100q11 69-6 131t-55 114zM325 557q48 0 90-18t74-50t50-74t18-90t-18-90t-50-74t-74-50t-90-18t-90 18t-73 50t-50 74t-18 90t18 90t50 74t73 50t90 18' />
    </svg>
)

export const Copy = (props: any) => (
    <svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15' />
    </svg>
)

export const Export = (props: any) => (
    <svg width='1em' height='1em' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path fill='currentColor' d='M11.78 5.841a.75.75 0 0 1-1.06 0l-1.97-1.97v7.379a.75.75 0 0 1-1.5 0V3.871l-1.97 1.97a.75.75 0 0 1-1.06-1.06l3.25-3.25L8 1l.53.53l3.25 3.25a.75.75 0 0 1 0 1.061M2.5 9.75a.75.75 0 0 0-1.5 0V13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z' />
    </svg>
)

export default {
    Search,
    Copy,
    Export
}
