import { HomeBody, HomeHeader } from '../components'

export function Home() {
    return (
        <main className='flex flex-col'>
            <HomeHeader />
            <HomeBody />
        </main>
    )
}