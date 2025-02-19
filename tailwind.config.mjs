/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: '#090909',
        tea: '#C7E3A1',
        nyan: '#E3F1D0',
        sage: '#A9AA87',
        drab: '#6E633D',
      },
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        playpen: ['Playpen Sans', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
