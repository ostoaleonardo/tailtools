import { Highlight, themes } from 'prism-react-renderer'

export function ComponentCode({ code }: { code: string }) {
    return (
        <Highlight
            language='jsx'
            code={code}
            theme={themes.oneDark}
        >
            {({ className, tokens, getLineProps, getTokenProps }) => (
                <pre className={className + ' invert dark:invert-0'}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })} className='block'>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} className='font-console' />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}