import { Button } from "@nextui-org/react";
import { Icons } from "..";

export function ShadowGeneratorHeader() {
    return (
        <div className='w-full flex flex-col xl:flex-row items-center justify-between bg-slate-300 dark:bg-zinc-800 rounded-2xl p-8 gap-8'>
            <div className='w-full flex flex-col gap-1'>
                <h1 className='text-4xl font-bold'>Shadow generator</h1>
                <p className='text-base lg:text-lg'>Generate shadows for your components.</p>
            </div>
            <div className='w-full flex max-md:flex-wrap items-center justify-end gap-4'>
                <Button
                    variant='faded'
                    onClick={() => { }}
                    startContent={<Icons.Export />}
                >
                    Export code
                </Button>
            </div>
        </div>
    )
}
