import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
            ) : (
                <Moon size={20} className="text-gray-600" />
            )}
        </button>
    )
}

export default ThemeToggle
