import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'font-default': 'var(--font-default)',
        'font-warp': 'var(--font-warp)',
      },
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'border': 'var(--border)',
      
        'custom-black': 'var(--custom-black)',
        'custom-white': 'var(--custom-white)',
        'dark-grey': 'var(--dark-grey)',
        'light-grey': 'var(--light-grey)',

        'header-end': '#ff7575',
        'header-1-start': '#12b864',
        'header-1-end': '#4de2f7',
        'header-2-start': '#ff5599',
        'header-2-end': '#ff8051',
        'header-3-start': '#7950f2',
        'header-3-end': '#f783ac',
      }
    },
  },
  plugins: [],
}
export default config
