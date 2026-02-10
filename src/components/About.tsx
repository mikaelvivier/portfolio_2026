import { BookOpen, Castle, Dumbbell, Globe, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()

    const interests = [
        {
            icon: TrendingUp,
            title: t('about.interests.tech.title'),
            description: t('about.interests.tech.description'),
            color: 'text-blue-500',
        },
        {
            icon: BookOpen,
            title: t('about.interests.reading.title'),
            description: t('about.interests.reading.description'),
            color: 'text-purple-500',
        },
        {
            icon: Castle,
            title: t('about.interests.chess.title'),
            description: t('about.interests.chess.description'),
            color: 'text-pink-500',
        },
        {
            icon: Globe,
            title: t('about.interests.travel.title'),
            description: t('about.interests.travel.description'),
            color: 'text-green-500',
        },
        {
            icon: Dumbbell,
            title: t('about.interests.sports.title'),
            description: t('about.interests.sports.description'),
            color: 'text-amber-500',
        },
    ]

    return (
        <section id="about" className="py-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">{t('about.title')}</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                        {t('about.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="glass-effect p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <div className={`${interest.color} mb-4`}>
                                <interest.icon size={40} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                                {interest.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {interest.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
