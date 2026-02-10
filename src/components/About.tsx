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
        <section id="about" className="relative text-gray-900 dark:text-white overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="ciridae-section-title">
                        {t('about.title')}
                    </h2>
                    <p className="ciridae-description">
                        {t('about.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="glass-effect p-8 rounded-none hover:transform hover:-translate-y-2 transition-all duration-300 bg-white/40 dark:bg-black/40 border border-gray-200 dark:border-white/5 hover:border-gray-400 dark:hover:border-white/20 group"
                        >
                            <div className={`${interest.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                <interest.icon size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white uppercase tracking-wider">
                                {interest.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
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
