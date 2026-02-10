import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { AuroraBackground } from './components/AuroraBackground'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen relative bg-dark-bg text-dark-text font-sans selection:bg-purple-500/30">
            <Header scrolled={scrolled} />
            <main>
                <div className="relative">
                    <AuroraBackground className="h-full w-full absolute inset-0 z-0" />
                    <div className="relative z-10">
                        <Hero />
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-white/10" />
                        <Projects />
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-white/10" />
                        <About />
                    </div>
                </div>
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
