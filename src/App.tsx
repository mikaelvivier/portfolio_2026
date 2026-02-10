import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BubbleBackground from './components/BubbleBackground'

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
        <div className="min-h-screen relative">
            <BubbleBackground />
            <div className="relative z-10">
                <Header scrolled={scrolled} />
                <main>
                    <Hero />
                    <Projects />
                    <About />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default App
