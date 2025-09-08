/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-background': '#0D0221', // Um roxo/azul bem escuro
        'cyber-cyan': '#00F6FF',
        'cyber-magenta': '#FF00E4',
        'cyber-lime': '#39FF14',
        'light-gray': '#F5F5F5', // Para texto normal
        'medium-gray': '#A9A9A9', // Para texto secundário
      },
      fontFamily: {
        'mono-cyber': ['VT323', 'monospace'], // Adicione uma fonte monoespaçada
      }
    },
  },
  plugins: [],
}