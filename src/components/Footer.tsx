import { Github, Linkedin, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Meteors } from './Meteors'

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className="bg-white dark:bg-black relative overflow-hidden text-gray-900 dark:text-white border-t border-gray-200 dark:border-white/10 py-12 px-6">
            <Meteors number={20} />
            <div className="container mx-auto text-center relative z-10">
                <div className="flex justify-center gap-8 mb-8">
                    <a
                        href="https://github.com/mikaelvivier"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mklvvr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="mailto:mikael735@gmail.com"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>
                <p className="text-gray-600 dark:text-gray-500 font-light tracking-wide text-sm uppercase">
                    © {new Date().getFullYear()} Mikaël Vivier. {t('footer.copyright')} ❤️, React & TailwindCSS.
                </p>
            </div>
        </footer>
    )
}

export default Footer
