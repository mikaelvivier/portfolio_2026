import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => changeLanguage('fr')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${i18n.language === 'fr'
                        ? 'text-purple-500 bg-purple-100 dark:bg-purple-900/30'
                        : 'text-gray-600 dark:text-gray-400 hover:text-purple-500'
                    }`}
            >
                FR
            </button>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${i18n.language === 'en'
                        ? 'text-purple-500 bg-purple-100 dark:bg-purple-900/30'
                        : 'text-gray-600 dark:text-gray-400 hover:text-purple-500'
                    }`}
            >
                EN
            </button>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <button
                onClick={() => changeLanguage('es')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${i18n.language === 'es'
                        ? 'text-purple-500 bg-purple-100 dark:bg-purple-900/30'
                        : 'text-gray-600 dark:text-gray-400 hover:text-purple-500'
                    }`}
            >
                ES
            </button>
        </div>
    )
}

export default LanguageSwitcher
