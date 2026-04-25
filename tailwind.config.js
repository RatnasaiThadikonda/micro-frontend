/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490'
        },
        ink: {
          900: '#111827',
          700: '#243044',
          500: '#64748b'
        }
      },
      boxShadow: {
        panel: '0 18px 42px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
