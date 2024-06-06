/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        lemon: 'hsl(75, 94%, 57%)',
        Grey: 'hsl(0, 0%, 20%)',
        'Dark-Grey': 'hsl(0, 0%, 12%)',
        'Off-Black': 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
};
