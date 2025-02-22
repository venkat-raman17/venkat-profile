import { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/**/*.{ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;