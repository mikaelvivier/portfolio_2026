import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const { t } = useTranslation()
    const [displayedText, setDisplayedText] = useState('')
    const fullText = t('hero.role')
    const typingSpeed = 100

    useEffect(() => {
        let currentIndex = 0
        setDisplayedText('') // Reset text when language changes
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(interval)
            }
        }, typingSpeed)

        return () => clearInterval(interval)
    }, [fullText])

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative px-6"
        >
            <div className="container mx-auto text-center animate-fade-in">
                {/* Profile Photo */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-50"></div>
                        <img
                            src="../../images/photo_Mikael.png"
                            alt="Mikaël Vivier"
                            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-800 shadow-2xl"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        {t('hero.greeting')}{' '}
                        <span className="text-gradient">Mikaël Vivier</span>
                    </h1>
                    <div className="h-12 md:h-16">
                        <p className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300">
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </p>
                    </div>
                </div>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-up">
                    {t('hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    >
                        {t('hero.viewProjects')}
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 glass-effect text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                        {t('hero.contactMe')}
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#projects"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
                aria-label="Scroll to projects"
            >
                <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
            </a>
        </section>
    )
}

export default Hero
