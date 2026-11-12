/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        // Thème clair inspiré du portrait : sable, taupe, bordeaux, vert feuillage
        ink: {
          DEFAULT: '#F3EEE7',
          50: '#EBE4DB',
          100: '#E0D6CA',
          200: '#D2C4B5',
          300: '#C2B1A0',
        },
        mist: {
          DEFAULT: '#1A1412',
          muted: '#6E635E',
          soft: '#3F352F',
        },
        signal: {
          DEFAULT: '#7A1F2B',
          dim: '#5C1520',
          soft: 'rgba(122, 31, 43, 0.1)',
        },
        taupe: {
          DEFAULT: '#8B7D7B',
          soft: 'rgba(139, 125, 123, 0.16)',
        },
        leaf: {
          DEFAULT: '#6F8F5B',
          soft: 'rgba(111, 143, 91, 0.14)',
        },
        paper: {
          DEFAULT: '#FFFCFA',
        },
        ember: {
          DEFAULT: '#B84545',
          soft: 'rgba(184, 69, 69, 0.12)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 8vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.25rem, 5.5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        site: '1280px',
      },
      spacing: {
        section: 'clamp(5rem, 12vw, 9rem)',
        gutter: 'clamp(1.25rem, 4vw, 2.5rem)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
        scrollPulse: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        'scroll-pulse': 'scrollPulse 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
