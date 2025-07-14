/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'olive-green': '#6A6F4C',
        'soft-cream': '#EDE1D2',
        'warm-wood': '#806044',
        'deep-mahogany': '#5D2510',
        'dark-cocoa': '#412F26',
        'translucent-coffee': '#835A36',
      },
      backgroundColor: {
        body: '#CBB89D',
      },
      backgroundImage: {
        'coffee-gradient':
          'linear-gradient(135deg, #CBB89D 0%, #B5A082 50%, #A08968 100%)',
        'warm-gradient':
          'linear-gradient(to bottom, #D4C4A8, #CBB89D, #C2B094)',
      },
      fontFamily: {
        sans: 'Vazirmatn , sans-serif',
      },
      screens: {
        xs: { max: '350px' },
        sm: { max: '375px' },
        md: { max: '450px' },
        lg: { max: '500px' },
        xl: { max: '600px' },
        '2xl': { min: '601px' },
      },
    },
  },
  plugins: [],
};
