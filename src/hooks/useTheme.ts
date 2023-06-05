const initialThemeState = () => {
    if(typeof window !== 'undefined'){
        if (localStorage.getItem('theme-informatteo')) {
            return localStorage.getItem('theme-informatteo') as 'light' | 'dark'
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'
}

export const useTheme = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>(initialThemeState);

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        localStorage.setItem('theme-informatteo', theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return {
        theme,
        toggleTheme
    }
}
