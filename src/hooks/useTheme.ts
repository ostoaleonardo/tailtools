import { useEffect, useState } from 'react'

export function useTheme() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const getTheme = () => {
            const theme = localStorage.getItem('theme') || 'dark'
            if (theme === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
            setTheme(theme)
        }

        getTheme()
    }, [])

    const toggleTheme = () => {
        const theme = localStorage.getItem('theme')
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark')
        setTheme(newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
