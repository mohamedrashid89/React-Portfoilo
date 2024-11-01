/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Center the container
        padding: '1rem', // Add padding
        screens: {
          // Custom widths for specific breakpoints
          sm: "100%", // 100% width on small screens
          md: "720px", // 720px on medium screens
          lg: "960px", // 960px on large screens
          xl: "1140px", // 1140px on extra-large screens
          '2xl': "1320px", // 1320px on 2xl screens
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: 1 },
          '50.01%, 100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
