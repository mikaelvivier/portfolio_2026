const BackgroundShapes = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            {/* Geometric Shapes */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 border-4 border-cyan-500/30 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border-4 border-purple-500/30 rotate-45 animate-pulse-slow"></div>

            {/* Lamp/Light Icon inspired shape */}
            <div className="absolute top-1/3 right-1/6 opacity-10">
                <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-0 h-0 border-l-16 border-r-16 border-t-32 border-l-transparent border-r-transparent border-t-blue-500/50"></div>
                </div>
            </div>

            {/* Floating rectangles */}
            <div className="absolute top-1/2 left-10 w-24 h-32 border-2 border-pink-500/20 rotate-12 animate-float"></div>
            <div className="absolute bottom-1/3 right-20 w-32 h-24 border-2 border-cyan-500/20 -rotate-12 animate-float animation-delay-2000"></div>

            {/* Small accent dots */}
            <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-pink-400 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
    )
}

export default BackgroundShapes
