import { ExampleButtons } from './ExampleComponents'

export function Examples() {
    return (
        <section className='w-full flex flex-col items-center justify-center transition-all py-16'>
            <div className='max-w-5xl w-full flex flex-col'>
                <div className='w-full flex items-center justify-between mb-4'>
                    <h1 className='text-3xl font-bold'>
                        Examples
                    </h1>
                </div>
                <div className='w-full grid grid-cols-11 gap-4'>
                    <ExampleButtons />
                </div>
            </div>
        </section>
    )
}