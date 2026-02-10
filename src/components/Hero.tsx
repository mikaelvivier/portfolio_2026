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
        <section id="hero" className="relative h-screen w-full overflow-hidden">
            <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center relative z-20 pt-24 md:pt-32">
                <div className="text-center animate-fade-in w-full max-w-4xl mx-auto">

                    {/* Profile Photo */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <img
                                src="/images/photo_Mikael.png"
                                alt="Mikaël Vivier"
                                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-800 shadow-2xl transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="mb-8 space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white mb-6">
                            {t('hero.greeting')}{' '}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                                Mikaël Vivier
                            </span>
                        </h1>
                        <div className="h-12 md:h-16 flex items-center justify-center">
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light uppercase tracking-widest">
                                {displayedText}
                                <span className="animate-pulse text-purple-600 dark:text-purple-400">|</span>
                            </p>
                        </div>
                    </div>

                    <p className="ciridae-description mb-16 animate-slide-up">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up mb-8">
                        <a
                            href="#projects"
                            className="px-10 py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-none font-bold uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {t('hero.viewProjects')}
                        </a>
                        <a
                            href="#contact"
                            className="px-10 py-4 bg-transparent border border-gray-900 text-gray-900 dark:border-white dark:text-white rounded-none font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                        >
                            {t('hero.contactMe')}
                        </a>
                    </div>
                </div>

                <a
                    href="#projects"
                    className="animate-float p-2 text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
                    aria-label="Scroll to projects"
                >
                    <ChevronDown size={32} />
                </a>
            </div>
        </section>
    )
}

export default Hero
