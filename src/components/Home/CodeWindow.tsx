export function CodeWindow({ code }: { code: string }) {
    return (
        <div className='w-4/5 h-auto bg-zinc-900 rounded-md overflow-hidden'>
            <div className='w-full h-8 flex items-center justify-between select-none px-2'>
                <span className='text-white/30 text-xs'>tailwind.config.js</span>
                <div className='flex gap-3'>
                    <div className='w-3 h-3 flex items-center justify-center text-white/70'>─</div>
                    <div className='w-3 h-3 border-white/70 border-1.5' />
                    <div className='w-3 h-3 flex items-center justify-center text-white/70'>✕</div>
                </div>
            </div>
            <div className='w-full h-full flex flex-col items-cefnter border-t-1 border-white/10 p-4'>
                <span className='font-console text-white/50 text-xs'>module.exports = {'{'}</span>
                <span className='font-console text-white/50 text-xs indent-5'>theme: {'{'}</span>
                <span className='font-console text-white/50 text-xs indent-10'>extend: {'{'}</span>
                <span className='font-console text-white/50 text-xs indent-[3.75rem] inde'>colors: {'{'}</span>
                {code.split('\n').map((line, index) => (
                    <span key={index} className={`font-console text-xs indent-20 ${line.includes('#') && 'indent-[6.25rem]'}`}>
                        {line.split('\'').map((part, partIndex) => (
                            part.startsWith('#') ? (
                                <span key={partIndex} className='font-console'>
                                    <div className='w-2 h-2 rounded-sm inline-block mr-1 indent-[6.25rem]' style={{ backgroundColor: part }} />
                                    {'\'' + part + '\''}
                                </span>
                            ) : part.match(/[A-Za-z]/) ? (
                                <span key={partIndex} className='font-console' style={{ color: part }}>
                                    {'\'' + part + '\''}
                                </span>
                            ) : (
                                <span key={partIndex} className='font-console'>{part}</span>
                            )
                        ))}
                    </span>
                ))}
                <span className='font-console text-white/50 text-xs indent-[3.75rem]'>{'},'}</span>
                <span className='font-console text-white/50 text-xs indent-10'>{'},'}</span>
                <span className='font-console text-white/50 text-xs indent-5'>{'},'}</span>
                <span className='font-console text-white/50 text-xs'>{'}'}</span>
            </div>
        </div>
    )
}
