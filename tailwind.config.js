/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'background-image': "url('/assets/background.png')"
      },
    },
  },
  plugins: [],
  // Ensure your Tailwind version supports JIT mode by default for arbitrary values:
  mode: 'jit', // This line is optional for Tailwind CSS v2.1+ as JIT mode is the default
};
