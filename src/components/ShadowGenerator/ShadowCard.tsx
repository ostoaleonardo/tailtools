import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

interface Props {
    shadow: {
        x: number
        y: number
        blur: number
        spread: number
        color: string
        inset: boolean
    }
}

export function ShadowCard({ shadow }: Props) {
    return (
        <Card
            className='max-w-[340px] h-fit border-foreground/10 border-2'
            shadow='none'
            style={{ boxShadow: `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}` }}
        >
            <CardHeader className='justify-between'>
                <div className='flex gap-5'>
                    <Avatar isBordered radius='full' size='md' src='https://avatars.githubusercontent.com/u/67109815?s=48' />
                    <div className='flex flex-col gap-1 items-start justify-center'>
                        <h4 className='text-small font-semibold leading-none text-default-600'>Tailwind CSS</h4>
                        <h5 className='text-small tracking-tight text-default-400'>@tailwindcss</h5>
                    </div>
                </div>
                <Button
                    size='sm'
                    radius='full'
                    color='primary'
                    variant='solid'
                    className='bg-blue-600'
                >
                    Follow
                </Button>
            </CardHeader>
            <CardBody className='py-0 text-small text-default-400'>
                <p>
                    Generate shadows for your components using this tool.
                </p>
            </CardBody>
            <CardFooter className='gap-3'>
                <div className='flex gap-1'>
                    <p className='font-semibold text-default-400 text-small'>4K</p>
                    <p className=' text-default-400 text-small'>Likes</p>
                </div>
                <div className='flex gap-1'>
                    <p className='font-semibold text-default-400 text-small'>1K</p>
                    <p className='text-default-400 text-small'>Retweets</p>
                </div>
            </CardFooter>
        </Card>
    )
}