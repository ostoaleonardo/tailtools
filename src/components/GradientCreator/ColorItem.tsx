import React from 'react'

interface ColorProps {
    onPress: () => void
    backgroundColor: string
    children: React.ReactNode
}

export function ColorItem({ onPress, backgroundColor, children }: ColorProps) {
    return (
        <div
            onClick={onPress}
            className='flex flex-col items-center justify-center cursor-pointer gap-2'
        >
            <div className='w-auto h-10 md:h-12 border-neutral-200 dark:border-neutral-800 border-2 rounded-lg aspect-square' style={{ backgroundColor: backgroundColor }} />
            <span className='text-sm font-semibold opacity-50 uppercase'>{children}</span>
        </div>
    )
}