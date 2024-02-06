import { Card, CardBody, CardHeader } from '@nextui-org/react'

interface Props {
    title?: string
    description?: string
    children?: React.ReactNode
    onClick?: () => void
}

export function ComponentPreview({ title, description, children, onClick }: Props) {
    return (
        <Card
            isPressable
            radius='lg'
            shadow='none'
            onPress={onClick}
            className='w-full h-full flex flex-col bg-slate-300 dark:bg-zinc-800 transition-all cursor-pointer select-none p-4'
        >
            <CardHeader className='flex flex-col items-start'>
                <h3 className='text-3xl font-bold transition-all'>{title}</h3>
                <p className='transition-all'>{description}</p>
            </CardHeader>
            <CardBody>
                <div className='w-full h-auto flex items-center justify-center bg-slate-200 dark:bg-zinc-900 rounded-xl transition-all py-4'>
                    {children}
                </div>
            </CardBody>
        </Card>
    )
}
