import { Card, CardBody, CardHeader } from '@nextui-org/react'

interface Props {
    title?: string
    description?: string
    children?: React.ReactNode
    handleOpen?: () => void
}

export function ComponentPreview({ title, description, children, handleOpen }: Props) {
    return (
        <Card
            isPressable
            shadow='none'
            onPress={handleOpen}
            className='w-full h-full min-h-72 flex flex-col bg-titan-white dark:bg-zinc-900 border-2 border-black/5 dark:border-white/5 rounded-3xl transition-all cursor-pointer select-none'
        >
            <CardHeader className='flex flex-col items-start p-6'>
                <h3 className='text-2xl sm:text-3xl font-bold bg-gradient-to-t from-foreground to-slate-400 bg-clip-text text-transparent transition-all'>{title}</h3>
                <p className='text-start text-slate-700 dark:text-slate-200 transition-all'>{description}</p>
            </CardHeader>
            <CardBody className='relative w-full h-full flex items-center justify-center bg-slate-200 dark:bg-titan-black rounded-t-3xl transition-all p-4'>
                {children}
            </CardBody>
        </Card>
    )
}
