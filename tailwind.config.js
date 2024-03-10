import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'
import { darken } from 'polished'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Play', 'sans-serif'],
        headers: ['Anta', 'sans-serif'],
        text: ['Kosugi Maru', 'serif'],
        code: ['Victor Mono', 'monospace'],
      },
      colors: {
        'radioactive-green': '#39ff14',
        'radioactive-yellow': '#ffcf00',
        'radioactive-orange': '#ff8c00',
        'neon-green': darken(0.2, '#39ff14'),
        'neon-yellow': darken(0.2, '#ffcf00'),
        'neon-orange': darken(0.2, '#ff8c00'),
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.headers').join(','),
            },
            'h3,h4': {
              fontFamily: theme('fontFamily.sans').join(','),
            },
            blockquote: {
              fontFamily: theme('fontFamily.code').join(','),
            },
            'p,li': {
              fontFamily: theme('fontFamily.text').join(','),
            },
            code: {
              fontFamily: theme('fontFamily.text').join(','),
            },
          },
        },
      }),
    },
  },
  plugins: [forms, typography, aspectRatio],
};
