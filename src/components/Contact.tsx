import { useState } from 'react'
import { Mail, User, MessageSquare, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t } = useTranslation()
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            setStatus('success')
            setFormState({ name: '', email: '', message: '' })
            setTimeout(() => setStatus('idle'), 5000)

            /* Uncomment this when you have your Formspree ID:
            const response = await fetch('https://formspree.io/f/mzdadbdk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            })

            if (response.ok) {
                setStatus('success')
                setFormState({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 5000)
            }
            */
        } catch (error) {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="contact" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">{t('contact.title')}</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('contact.description')}
                    </p>
                </div>

                <div className="glass-effect rounded-xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                {t('contact.name')}
                            </label>
                            <div className="relative">
                                <User
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    size={20}
                                />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                    placeholder={t('contact.namePlaceholder')}
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                {t('contact.email')}
                            </label>
                            <div className="relative">
                                <Mail
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    size={20}
                                />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                    placeholder={t('contact.emailPlaceholder')}
                                />
                            </div>
                        </div>

                        {/* Message Input */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                {t('contact.message')}
                            </label>
                            <div className="relative">
                                <MessageSquare
                                    className="absolute left-3 top-4 text-gray-400"
                                    size={20}
                                />
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                                    placeholder={t('contact.messagePlaceholder')}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    {t('contact.sending')}
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    {t('contact.send')}
                                </>
                            )}
                        </button>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                                ✅ {t('contact.success')}
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
                                ❌ {t('contact.error')}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
