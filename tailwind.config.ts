import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/routes/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        dollyZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        upAndDown: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        cloud: {
          '0%': { transform: 'translateX(0px) scale(1.1)' },
          '50%': { transform: 'translateX(200px) scale(0.9)' },
          '100%': { transform: 'translateX(0px) scale(1.1)' },
        },
        cloud2: {
          '0%': { transform: 'translateY(0px) translateX(0px) scale(1.1)' },
          '50%': { transform: 'translatey(-400px) translateX(0px) scale(0.9)' },
          '100%': { transform: 'translatey(0px) translateX(0px) scale(1.1)' },
        },
        cloud3: {
          '0%': { transform: 'translateX(0px) scale(1.1)' },
          '50%': { transform: 'translateX(-250px) scale(0.9)' },
          '100%': { transform: 'translateX(0px) scale(1.1)' },
        },
      },
      animation: {
        dolly: 'dollyZoom 10s ease-in-out forwards',
        fadein: 'fadeIn 0.5s ease-in 0.5s forwards',
        updown: 'upAndDown 2s ease-in-out infinite',
        cloud: 'cloud 4s ease-in-out infinite',
        cloud2: 'cloud2 2.5s ease-in-out infinite',
        cloud3: 'cloud3 2s ease-in-out infinite',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config
