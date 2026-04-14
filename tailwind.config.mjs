/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif KR"', 'Georgia', 'serif'],
        sans: ['"Pretendard Variable"', 'Pretendard', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      colors: {
        accent: '#C2410C',
        cat: {
          bbq: '#C2410C',
          ai:  '#1D4ED8',
          biz: '#78350F',
          data:'#047857',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          sub:   '#8C8C8C',
          muted: '#B0B0B0',
        },
      },
      maxWidth: {
        reading: '640px',
        site:    '960px',
      },
    },
  },
  safelist: [
    'text-cat-bbq', 'text-cat-ai', 'text-cat-biz', 'text-cat-data',
  ],
  plugins: [],
};
