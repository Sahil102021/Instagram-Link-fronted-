import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        glass: 'rgba(255, 255, 255, 0.1)',
        neon: '#ff00ff',
        ocean: '#63B3ED',
        orchid: '#D53F8C',
        grape: '#805AD5',
        mint: '#38B2AC',
        sunshine: '#F6E05E',
        ice: '#BEE3F8',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
