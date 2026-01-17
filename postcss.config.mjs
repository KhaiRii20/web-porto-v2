/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},  // Versi 3 menggunakan ini (bukan @tailwindcss/postcss)
    autoprefixer: {},
  },
};

export default config;