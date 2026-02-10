import { Github, Linkedin, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
            <div className="container mx-auto text-center">
                <div className="flex justify-center gap-6 mb-8">
                    <a
                        href="https://github.com/mikaelvivier"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mklvvr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="mailto:mikael735@gmail.com"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>
                <p className="text-gray-500">
                    © {new Date().getFullYear()} Mikaël Vivier. {t('footer.copyright')} ❤️ {t('footer.and')} React.
                </p>
            </div>
        </footer>
    )
}

export default Footer
