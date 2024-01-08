import { Button } from '@nextui-org/react'

function ExamplesButtons() {
    return (
        <div className='col-span-full flex items-center justify-between bg-neutral-600/5 rounded-xl p-10'>
            <Button color='primary' variant='solid'>
                Solid
            </Button>
            <Button color='primary' variant='faded'>
                Faded
            </Button>
            <Button color='primary' variant='bordered'>
                Bordered
            </Button>
            <Button color='primary' variant='light'>
                Light
            </Button>
            <Button color='primary' variant='flat'>
                Flat
            </Button>
            <Button color='primary' variant='ghost'>
                Ghost
            </Button>
            <Button color='primary' variant='shadow'>
                Shadow
            </Button>
        </div>
    );
}

export function ExamplesComponents() {
    return (
        <section className='w-full flex flex-col items-center justify-center bg-zinc-900 transition-all py-16'>
            <div className='max-w-5xl w-full flex flex-col'>
                <div className='w-full flex items-center justify-between mb-4'>
                    <h1 className='text-3xl font-bold text-neutral-100'>
                        Examples
                    </h1>
                </div>
                <div className='w-full grid grid-cols-11 gap-2'>
                    <ExamplesButtons />
                </div>
            </div>
        </section>
    )
}