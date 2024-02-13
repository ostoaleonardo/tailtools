export function AppleBento() {
    return (
        <div className='w-full grid grid-cols-2 md:grid-cols-5 grid-rows-12 md:grid-rows-6 gap-4 p-4'>
            <article className='col-span-full md:col-span-3 row-span-4 flex flex-col items-center justify-center bg-zinc-100 rounded-3xl py-8 gap-4'>
                <h1 className='text-center text-4xl font-bold text-black p-4'>
                    iPhone 15 Pro
                </h1>
                <img
                    alt='iPhone 15 Pro'
                    src='https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large.jpg'
                    className='w-2/3 aspect-auto contrast-[.9]'
                />
                <div className='flex flex-row items-center justify-center gap-8'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <p className='text-sm font-medium text-black/50'>
                            iPhone 15
                        </p>
                        <span className='text-4xl font-bold text-black'>
                            6.1"
                        </span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <p className='text-sm font-medium text-black/50'>
                            iPhone 15 Pro Max
                        </p>
                        <span className='text-4xl font-bold text-black'>
                            6.7"
                        </span>
                    </div>
                </div>
            </article>
            <article className='relative col-span-full md:col-span-2 row-span-2 flex flex-col items-center justify-center bg-black rounded-3xl overflow-hidden'>
                <div className='h-1/2 flex flex-col items-center justify-center z-10'>
                    <p className='text-sm font-medium text-white/50'>
                        iPhone
                    </p>
                    <h2 className='w-2/3 text-center text-4xl font-bold bg-gradient-to-br from-zinc-100 to-zinc-800 bg-clip-text text-transparent'>
                        Forged in titanium.
                    </h2>
                </div>
                <video
                    loop
                    autoPlay
                    src='https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/titanium/small.mp4'
                    className='absolute inset-x-0 bottom-0 w-full aspect-auto'
                />
            </article>
            <article className='col-span-full md:col-span-2 row-span-2 flex flex-col items-center justify-between bg-zinc-100 rounded-3xl overflow-hidden'>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <p className='text-sm font-medium text-black/50'>
                        Dynamic Island
                    </p>
                    <h2 className='w-4/5 text-center text-3xl lg:text-4xl font-bold text-black'>
                        The screen that moves with you.
                    </h2>
                </div>
                <img
                    alt='iPhone 15 Pro'
                    src='https://www.apple.com/v/iphone-15/c/images/overview/dynamic-island/dd_double__dpube2p1gd4y_small.jpg'
                    className='w-full aspect-auto contrast-[.9]'
                />
            </article>
            <article className='relative col-span-full md:col-span-2 row-span-2 flex justify-center bg-black rounded-3xl overflow-hidden'>
                <div className='h-1/2 flex items-center justify-center z-10'>
                    <h2 className='w-4/5 text-center text-3xl lg:text-4xl font-bold bg-gradient-to-br from-zinc-100 to-zinc-800 bg-clip-text text-transparent'>
                        Get in on the Action button.
                    </h2>
                </div>
                <video
                    loop
                    autoPlay
                    src='https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/action-button/small.mp4'
                    className='absolute bottom-0 h-1/2 aspect-auto'
                />
            </article>
            <article className='relative col-span-full md:col-span-3 lg:col-span-3 row-span-2 flex flex-col items-center justify-dcenter bg-zinc-100 rounded-3xl overflow-hidden'>
                <div className='h-1/2 flex flex-col items-center justify-center z-10'>
                    <p className='text-sm font-medium text-black/50'>
                        Every day. More extraordinary.
                    </p>
                    <h2 className='text-center text-4xl font-bold text-black'>
                        iOS 17
                    </h2>
                </div>
                <img
                    alt='iPhone 15 Pro'
                    src='https://www.apple.com/v/iphone/home/bs/images/overview/why-iphone/ios17__glwsbqdnc6um_medium.jpg'
                    className='absolute bottom-0 w-full contrast-[.9]'
                />
            </article >
        </div >
    )
}