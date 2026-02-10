import { ExternalLink, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface Project {
    title: string
    description: string
    tags: string[]
    image: string
    demoUrl?: string
    githubUrl: string
}

const Projects = () => {
    const { t } = useTranslation()
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    // Using a ref to track if we are currently "dwelling" to avoid re-renders on every move if we store it in state
    // But we need state for the visual update.
    // Actually simpler:
    // onMouseEnter: Start timer (1s) -> setHoveredIndex(index)
    // onMouseMove: Clear timer. setHoveredIndex(null). Start timer (1s).
    // onMouseLeave: Clear timer. setHoveredIndex(null).

    // We need a ref to store the current timeout so we can clear it.
    const timeoutRef = useState<{ current: NodeJS.Timeout | null }>({ current: null })[0]

    const handleMouseEnter = (index: number) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setHoveredIndex(index)
        }, 500)
    }

    const handleMouseMove = (index: number) => {
        // If we move, we cancel the focus immediately
        setHoveredIndex(null)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        // And restart the timer - so you have to stop moving for 1s to get focus
        timeoutRef.current = setTimeout(() => {
            setHoveredIndex(index)
        }, 500)
    }

    const handleMouseLeave = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setHoveredIndex(null)
    }

    const projects: Project[] = [
        {
            title: t('projects.items.cicd.title'),
            description: t('projects.items.cicd.description'),
            image: '/images/dashboard_CICD.jpg',
            tags: ['GitLab CI', 'Docker', 'Ansible', 'Linux', 'Spring Boot', 'Angular'],
            githubUrl: 'https://github.com/mikaelvivier',
        },
        {
            title: t('projects.items.social.title'),
            description: t('projects.items.social.description'),
            image: '/images/chti_face_bouc.png',
            tags: ['Flutter', 'Firebase', 'Dart', 'Mobile'],
            githubUrl: 'https://github.com/mikaelvivier',
        },
        {
            title: t('projects.items.aws.title'),
            description: t('projects.items.aws.description'),
            image: '/images/aws.png',
            tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'React'],
            githubUrl: 'https://github.com/mikaelvivier',
        },
        {
            title: t('projects.items.blockchain.title'),
            description: t('projects.items.blockchain.description'),
            image: '/images/electionchain.png',
            tags: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Truffle'],
            githubUrl: 'https://github.com/mikaelvivier',
        },
        {
            title: t('projects.items.gacha.title'),
            description: t('projects.items.gacha.description'),
            image: '/images/projet_ahcag.png',
            tags: ['Spring Boot', 'Microservices', 'PostgreSQL', 'Docker', 'React'],
            githubUrl: 'https://github.com/mikaelvivier',
        },
        {
            title: t('projects.items.rental.title'),
            description: t('projects.items.rental.description'),
            image: '/images/bfb_loc.png',
            tags: ['Java', 'MySQL', 'MVC', 'Design Patterns', 'Swagger'],
            githubUrl: 'https://github.com/mikaelvivier',
        },
    ]

    return (
        <section id="projects" className="relative overflow-hidden bg-transparent text-gray-900 dark:text-white">
            <div className="container mx-auto px-6 py-20 relative z-10 text-center">
                <div className="mb-24">
                    <h2 className="ciridae-section-title">
                        {t('projects.title')}
                    </h2>
                    <p className="ciridae-description">
                        {t('projects.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={handleMouseLeave}
                            className={`bg-white/60 dark:bg-zinc-900/30 border border-gray-200 dark:border-zinc-800/50 backdrop-blur-sm rounded-none overflow-hidden group hover:border-gray-400 dark:hover:border-zinc-600 transition-all duration-500
                                ${hoveredIndex !== null && hoveredIndex !== index ? 'blur-[2px] scale-[0.98] opacity-50' : 'opacity-100 scale-100'}
                            `}
                        >
                            <div className="relative h-72 overflow-hidden">
                                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white uppercase tracking-wider group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 h-20 overflow-y-auto font-light leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs uppercase tracking-wider bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-6">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors uppercase text-sm tracking-widest font-bold"
                                    >
                                        <Github size={18} />
                                        <span>{t('projects.code')}</span>
                                    </a>
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors uppercase text-sm tracking-widest font-bold"
                                        >
                                            <ExternalLink size={18} />
                                            <span>{t('projects.demo')}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
