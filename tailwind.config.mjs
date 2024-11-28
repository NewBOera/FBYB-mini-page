/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bgMain: '#F8FBFF',
        blueBg: '#002348',
        blue: '#001730',
        white: '#F8FBFF',
        gray: '#A7B3C7',
        yellow: '#E8D6AD',
      },
      fontFamily: {
        example: ['example', 'example'],
      },
    },
  },
  plugins: [],
};
