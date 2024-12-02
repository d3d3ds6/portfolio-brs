/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./nuxt.config.{js,ts}", // Include Nuxt-specific files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#090025",
      },
    },
  },
  plugins: [],
  important: true, // Add this to prioritize Tailwind utilities
};
