import { ExternalLink, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Project {
    title: string
    description: string
    tags: string[]
    image: string
    demoUrl: string
    githubUrl: string
}

const Projects = () => {
    const { t } = useTranslation()

    const projects: Project[] = [
        {
            title: t('projects.items.cicd.title'),
            description: t('projects.items.cicd.description'),
            image: '/images/dashboard_CICD.jpg',
            tags: ['GitLab CI', 'Docker', 'Ansible', 'Linux', 'Spring Boot', 'Angular'],
            githubUrl: 'https://github.com/mikaelvivier',
            demoUrl: 'https://demo.com',
        },
        {
            title: t('projects.items.social.title'),
            description: t('projects.items.social.description'),
            image: '/images/chti_face_bouc.png',
            tags: ['Flutter', 'Firebase', 'Dart', 'Mobile'],
            githubUrl: 'https://github.com/mikaelvivier',
            demoUrl: 'https://demo.com',
        },
        {
            title: t('projects.items.aws.title'),
            description: t('projects.items.aws.description'),
            image: '/images/aws.png',
            tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'React'],
            githubUrl: 'https://github.com/mikaelvivier',
            demoUrl: 'https://demo.com',
        },
        {
            title: t('projects.items.blockchain.title'),
            description: t('projects.items.blockchain.description'),
            image: '/images/electionchain.png',
            tags: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Truffle'],
            githubUrl: 'https://github.com/mikaelvivier',
            demoUrl: 'https://demo.com',
        },
        {
            title: t('projects.items.gacha.title'),
            description: t('projects.items.gacha.description'),
            image: '/images/projet_ahcag.png',
            tags: ['Spring Boot', 'Microservices', 'PostgreSQL', 'Docker', 'React'],
            githubUrl: 'https://github.com/mikaelvivier',
            demoUrl: 'https://demo.com',
        },
        {
            title: t('projects.items.rental.title'),
            description: t('projects.items.rental.description'),
            image: '/images/bfb_loc.png',
            tags: ['Java', 'Swing', 'MySQL', 'MVC', 'Design Patterns'],
            githubUrl: 'https://github.com/mikaelvivier',
            demoUrl: 'https://demo.com',
        },
    ]

    return (
        <section id="projects" className="py-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">{t('projects.title')}</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        {t('projects.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-y-auto">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-500/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                                    >
                                        <Github size={20} />
                                        <span>{t('projects.code')}</span>
                                    </a>
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                        <span>{t('projects.demo')}</span>
                                    </a>
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
