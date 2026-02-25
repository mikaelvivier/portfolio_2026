import { useState } from 'react'
import { Mail, User, MessageSquare, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Meteors } from './Meteors'

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
        <section id="contact" className="py-20 relative overflow-hidden bg-white dark:bg-black">
            <Meteors number={30} />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="ciridae-section-title">
                            {t('contact.title')}
                        </h2>
                        <p className="ciridae-description">
                            {t('contact.description')}
                        </p>
                    </div>

                    <div className="bg-white/80 dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-800 backdrop-blur-xl rounded-none p-10 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t('contact.name')}
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-4 rounded-none bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white focus:border-gray-900 dark:focus:border-white transition-all outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                            placeholder={t('contact.namePlaceholder')}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-400 mb-2">
                                        {t('contact.email')}
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-4 rounded-none bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white focus:border-gray-900 dark:focus:border-white transition-all outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-400 mb-2">
                                    {t('contact.message')}
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-4 text-gray-400 dark:text-gray-500" size={20} />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={6}
                                        required
                                        className="w-full pl-12 pr-4 py-4 rounded-none bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white focus:border-gray-900 dark:focus:border-white transition-all outline-none resize-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                        placeholder={t('contact.messagePlaceholder')}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="px-10 py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-none font-bold uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-gray-200 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white dark:border-black"></div>
                                            {t('contact.sending')}
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            {t('contact.send')}
                                        </>
                                    )}
                                </button>
                            </div>
                            {status === 'success' && (
                                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-lg text-center animate-fade-in">
                                    {t('contact.success')}
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg text-center animate-fade-in">
                                    Error sending message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
