export function CodeToExport({ code }: { code: string }) {
    return (
        code.split('\n').map((line: string, index: number) => (
            <span
                key={index}
                className={`flex text-xs sm:text-sm font-console ${line.includes('#') || line.includes(';') ? 'indent-10' : ''}`}
            >
                {line}
            </span>
        ))
    )
}