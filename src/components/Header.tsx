import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'

const Header = ({ scrolled }: { scrolled: boolean }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t } = useTranslation()

    const navItems = [
        { label: t('header.home'), href: '#hero' },
        { label: t('header.about'), href: '#about' },
        { label: t('header.projects'), href: '#projects' },
        { label: t('header.contact'), href: '#contact' },
    ]

    const socialLinks = [
        { icon: Github, href: 'https://github.com/mikaelvivier', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/mklvvr/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:mikael735@gmail.com', label: 'Email' },
    ]

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen
                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold text-gradient">
                        MV
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-4">
                            <LanguageSwitcher />
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-800 dark:text-gray-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                <LanguageSwitcher />
                                <ThemeToggle />
                            </div>
                            <div className="flex space-x-4 pt-2">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-purple-500 transition-colors"
                                        aria-label={link.label}
                                    >
                                        <link.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
