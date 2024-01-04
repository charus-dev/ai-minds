import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue': '#3423fe',
      'blue-100': '#3d65f9',
      'primary': '#51557a',
      'secondary': '#f3f8ff',
      'border': '#dddce8',
      'secondary-100': '#fefeff'
    },
    extend: {
      boxShadow: {
        'top': '0px -16px 24px 0px #00000040'
      }
    },
  },
  plugins: [],
}
export default config
