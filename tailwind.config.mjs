/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Huiwen-mincho', 'Merriweather', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'breathe-light': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 0px rgba(0, 0, 0, 0))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.8))',
          },
        },
        'breathe-dark': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
          },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(80%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-down': {
          '0%': { opacity: '0', transform: 'translateY(-80%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'content-blur': {
          '0%': { filter: 'blur(0.3rem)' },
          '100%': { filter: 'blur(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'breathe-light': 'breathe-light 2s infinite',
        'breathe-dark': 'breathe-dark 2s infinite',
      },
      transitionTimingFunction: {
        'minor-spring': 'cubic-bezier(0.18,0.89,0.82,1.04)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
