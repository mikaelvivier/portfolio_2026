/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#0a0a0a',
                    surface: '#1a1a1a',
                    border: '#2a2a2a',
                    text: '#e5e5e5',
                    muted: '#a3a3a3',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
